import React, {useEffect} from 'react'
import Collabarator from '../Collabarator/Collabarator'
import { useDispatch, useSelector } from 'react-redux'
import { loadCollabarators } from '../../store/actions/collabaratorsActions'
import './collabarators.css'
import './collabaratorsMobile.css'
function Collaborators() {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(loadCollabarators())
	}, [])
	const collabarators = useSelector(state => {
		
		return {
			colls: state.collabaratorReducer.collabarators.slice(1),
			ceo: state.collabaratorReducer.collabarators.slice(0, 1)
		}
	})
	console.log(collabarators)
	return (
		<div className='collaborators'>
			<div className='container'>
				<div className='collaborators__wrapper'>
					<div className='collaborators__main'>
						<div className='collaborators__main__desc'>
							<div className='collaborators__main__desc__name'>
								{collabarators.ceo[0]?.name}
							</div>
							<div className='collaborators__main__desc__position'>
								{collabarators.ceo[0]?.position}
							</div>
							<div className='collaborators__main__desc__text'>
							{collabarators.ceo[0]?.text}
							</div>
						</div>
						<div className='collaborators__main__img'>
							<img
								src='https://itmuraddev.com/aliasserver/images/collobarators/1.png'
								alt=''
							/>
						</div>
					</div>
					<div className='collaborators__list'>
						{
							collabarators.colls?.map(collabarator => {
								return <Collabarator collabarator={collabarator} key={collabarator.id}/>
							})
						}
  
          </div>
				</div>
			</div>
		</div>
	)
}

export default Collaborators
