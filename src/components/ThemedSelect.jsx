import React from 'react'

const ThemedSelect = ({onChange}) => {
  return (
    <select onChange={onChange} className='border-2 border-yellow-950 rounded-md px-2 py-1 text-taupe-200/70 open:bg-yellow-950 focus:border-taupe-200 focus:text-taupe-200'>
        <option value={""}>Alege Zodia</option>
        <option value={"capricorn"}>Capricorn</option>
        <option value={"varsator"}>Vărsător</option>
        <option value={"pesti"}>Pești</option>
        <option value={"berbec"}>Berbec</option>
        <option value={"taur"}>Taur</option>
        <option value={"gemeni"}>Gemeni</option>
        <option value={"rac"}>Rac</option>
        <option value={"leu"}>Leu</option>
        <option value={"fecioara"}>Fecioară</option>
        <option value={"balanta"}>Balanță</option>
        <option value={"scorpion"}>Scorpion</option>
        <option value={"sagetator"}>Săgetător</option>
    </select>
  )
}

export default ThemedSelect
