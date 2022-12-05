import { Form } from 'react-bootstrap';
import {FiChevronDown} from 'react-icons/fi'
import './SearchCars.css'

const SearchCars = (props) => {
    return(
        <div className='searchcars-section'>
            <div className='searchcars-bg'>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Nama Mobil</p>
                    </div>
                    <div className='searchcars-input-bg'>
                        <input
                            onChange={props.nameFilter}
                            className={props.isInputDisable ?
                            'filtercars-input-name-disable' :
                            'filtercars-input-name'}
                            placeholder={props.isInputDisable? null:
                            'Ketik nama/tipe mobil'}
                        />
                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Kategori</p>
                    </div>
                    <div className='searchcars-input-bg'>
              
                    <Form.Select onChange={props.categoryFilter}
                    className={props.isInputDisable?
                    'filtercars-select-disable':'filtercars-select'}>
                        <option value={''}>Category</option>
                        <option value={'small'}>2-3 orang</option>
                        <option value={'medium'}>2-6 orang</option>
                        <option value={'large'}>6-8 orang</option>

                    </Form.Select>
                    
                      
                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Harga</p>
                    </div>
                    <div className='searchcars-input-harga'>

                    <Form.Select onChange={props.minPriceFilter}
                    className={props.isInputDisable?
                    'filtercars-select-disable':'filtercars-select'}>
                        <option value={''}>Masukkan Harga Sewa per Hari</option>
                        <option value={'300000'}>kurang dari Rp.400.000</option>
                        <option value={'600000'}>Rp.400.000-Rp.600.000</option>
                        <option value={'800000'}> lebih dari Rp.600.000</option>

                    </Form.Select>

                    </div>
                </div>
                <div>
                    <div className='searchcars-input-title'>
                        <p className='searchcars-input-title-p'>Status</p>
                    </div>
                    <div>
                        <Form.Select  onChange={props.statusFilter} className={props.isInputDisable ? 
                            'filtercars-select-disable':'filtercars-select'}>
                            <option value={''}>Status</option>
                            <option value={false}>Tersedia</option>
                            <option value={true}>Disewa</option>
                        </Form.Select>
                       
                    </div>
                </div>
                <div className='searchcars-seacrh-button-bg'>
                    <button onClick= {props.handleSearchButton} className='searchcars-seacrh-button'>Cari Mobil</button>
                </div>
            </div>
        </div>
    )
}

export default SearchCars;