import styled from "styled-components";
import bcgImg from "../../images/bcgImg.png";
import logo from "../../images/Logo.png";

export const UsersList = styled.ul`
  max-width: 790px;
margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
`;
export const UserCard = styled.li`
  background-image: url(${bcgImg}), url(${logo}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-size: 308px 168px, 76px 22px, 100%;
  background-position: top 28px left 36px, top 20px left 20px, center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 36px;
  padding-top: 150px;
  
  width: 380px;
  height: 460px;
  border-radius: 20px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 214px;
    transform: translateY(-50%);
    height: 8px;
    background-color: #ebd8ff;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
      inset 0px -1.71846px 3.43693px #ae7be3,
      inset 0px 3.43693px 2.5777px #fbf8ff;
  }
  img {
    max-height: 100%;
    object-fit: contain;
  }
`;
export const Eclipse = styled.div`
  margin-bottom: 26px;
  margin-top: 20px;
  overflow: hidden;
  object-fit: cover;
  z-index: 1;
  width: 80px;
  height: 80px;
  border: 8px solid #ebd8ff;
  background: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50%;
`;