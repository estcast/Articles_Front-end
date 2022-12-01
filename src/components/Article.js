import React from "react";

function Article({id, articleData, delArticle}) {

	const {title, date, content, author} = articleData;

	const formatDate = (date) => {
		return date.substring(8, 10) + date.substring(4,8) + date.substring(0,4);
	}

	const del = () =>{
		delArticle(id);
	}

  return (
		<>
			<div className="col">
				<div className="card mx-auto mb-3">
					<div className="card-header">
						<h3 className="card-title">{title}</h3>
					</div>
					<div className="card-body">
						<label className="card-text text-start">{content}</label>
					</div>
					<ul className="list-group list-group-flush">
						<li className="list-pub list-group-item">Publicado el {formatDate}</li>
						<li className="list-pub list-group-item">Autor: {author}</li>
					</ul>
					<div className="card-footer">
					<button className="btn btn-danger btn-sm" type="button" onClick={del}>Eliminar</button>
				</div>
				</div>
				
			</div>
		</>
	);
}

export default Article;