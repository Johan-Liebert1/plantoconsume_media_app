import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMangaDetails } from "../actions/animeMangaActions";

import AnimeMangaComponent from "../components/AnimeMangaComponent";
import DesktopNavbarComponent from "../components/DesktopNavbarComponent";
import MobileNavbarComponent from "../components/MobileNavbarComponent";
import PageLinksComponent from "../components/PageLinksComponent";

const MangaScreen = () => {
	const [mangaId, setMangaId] = useState("");

	const dispatch = useDispatch();

	const { manga } = useSelector(state => state.manga);

	const { userLogin: userInfo } = useSelector(state => state.userLogin);

	const condb = window.innerWidth > 900; // condition big
	const conds = window.innerWidth > 580;

	const addManga = e => {
		e.preventDefault();

		const mangaExists = manga.find(m => m.mal_id === Number(mangaId));

		if (!mangaExists) dispatch(getMangaDetails(userInfo.token, mangaId));
	};

	return (
		<>
			{condb && <DesktopNavbarComponent />}
			<div
				style={{
					width: condb ? "70%" : "95%",
					margin: "20px auto"
				}}
			>
				{condb ? <PageLinksComponent /> : <MobileNavbarComponent />}

				<h1
					style={{
						textAlign: "center",
						fontSize: conds ? "" : "2.0rem"
					}}
				>
					Plan to Read Manga
				</h1>

				<form onSubmit={addManga}>
					<h6 className={condb ? "row" : "row ml-1"}>Add a New Entry</h6>

					<div className="form-group row">
						<input
							type="text"
							className={`form-control col-md-3 col-sm-5 col-7 ${
								condb ? "" : conds ? "ml-1" : "ml-2"
							}`}
							value={mangaId}
							placeholder="Enter Manga Id"
							onChange={e => setMangaId(e.target.value)}
							style={{ backgroundColor: "rgb(14, 22, 29)", color: "white" }}
						/>
						<button
							type="submit"
							className={`btn btn-outline-primary col-md-1 col-sm-4 col-3 
                            ${condb ? "ml-5" : conds ? "" : "ml-2"}`}
						>
							{" "}
							Add
						</button>
					</div>
				</form>

				{manga?.map((man, index) => {
					let arr = {
						airing: man.publishing,
						duration: man.volumes === null ? "-" : man.volumes,
						// no duration for mangas so duration = volumes
						episodes: man.chapters === null ? "-" : man.chapters,
						genres: man.genres.map(g => g.name),
						airDate: man["published"].string,
						image: man.image_url,
						title: man.title,
						// type: man.type, no type for manga
						href: man.url,
						score: man.score,
						rating: man.rating,
						mal_id: man.mal_id
					};

					return <AnimeMangaComponent key={index} arr={arr} what="manga" />;
				})}

				<footer
					style={{
						width: "100%",
						height: "100px",
						textAlign: "center",
						marginTop: "75px"
					}}
				>
					API Used :{" "}
					<a href="https://jikan.moe/" target="_blank" rel="noreferrer">
						Jikan API
					</a>
				</footer>
			</div>
		</>
	);
};

export default MangaScreen;
