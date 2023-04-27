import { Select, Option } from './Filter.styled';


export const Filter = ({ value, handleChange }) => {
    return (
        <Select value={value} onChange={handleChange}>
            <Option value='all'>All</Option>
            <Option value='follow'>Follow</Option>
            <Option value='following'>Following</Option>
        </Select>
    )
}