import React, { useState } from 'react';
import axios from 'axios';
import Global from '../Global';
import {Navigate} from 'react-router-dom';

function New(){

	const url = Global.url;

	const [article, setArticle] = useState({
		title:null,
		content:null,
		author:null,
	});

	const [redirect, setRedirect] = useState(false);

	//Refencia de los datos del formulario:
	let titleRef = React.createRef();
	let contentRef = React.createRef();
	let authorRef = React.createRef();

	const changeState = () =>{
		setArticle({
			title:titleRef.current.value,
			content: contentRef.current.value,
			author: authorRef.current.value
		});

		console.log(article);
	}

	const sendData = (e)=>{
		//Evitamos que al recibir los datos se recargue la pantalla
		e.preventDefault();
		changeState();
		//Petición HTTP por POST para guardar el artículo
		axios.post(url + 'save', article).then(res =>{
			setRedirect(true);
			console.log(res.data);
		});
	}

	if(redirect){
		return <Navigate to='articles' />;
	}

	return(
		<>
			<div className='nueva-publicacion'>
				<div id='formulario' className='card mx-auto mb-3 mt-5' style={{width: '30em'}}>
					<div className='card-header text-dark'>
						<h4>Publicar nuevo artículo</h4>
					</div>
					<div className='card-body'>
						<form onSubmit={sendData}>
							<div className='mb-3'>
								<label>Título</label>
								<input type='text' className='form-control' id='title' name='content' ref={titleRef} onChange={changeState} required />
							</div>
							<div className='mb-3'>
								<label>Content</label>
								<textarea className='form-control' id='content' name='content' rows='6' cols='30' ref={contentRef} onChange={changeState} required />
							</div>
							<div className='mb-3'>
								<label>Autor</label>
								<input type='text' className='form-control' id='author' name='author' ref={authorRef} onChange={changeState} required />
							</div>
							<div className='mb-3'>
								<input type='submit' className='form-control btn btn-primary' id='publish' value='Publicar' required />
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default New;