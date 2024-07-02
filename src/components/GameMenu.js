import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/GameMenu.css";

const GameMenu = (props) => {
  let navigate = useNavigate();
  return (
    <div className="main-wrapper">
      <div className="blur-screen">
        <div className="nav-bg">
          <nav className="nav-bar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="40"
              viewBox="0 0 44 40"
              fill="none"
            >
              <g clip-path="url(#clip0_9_44)">
                <path
                  d="M24.8997 3.36841H13.2303C12.8585 3.36841 12.5571 3.65114 12.5571 3.99997C12.5571 4.3488 12.8586 4.63153 13.2303 4.63153H24.8996C25.2714 4.63153 25.5728 4.3488 25.5728 3.99997C25.5728 3.65114 25.2714 3.36841 24.8997 3.36841Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M31.1832 3.36841H27.5926C27.2208 3.36841 26.9194 3.65114 26.9194 3.99997C26.9194 4.3488 27.2209 4.63153 27.5926 4.63153H31.1832C31.555 4.63153 31.8564 4.3488 31.8564 3.99997C31.8564 3.65114 31.555 3.36841 31.1832 3.36841Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M15.0256 6.73688H13.2303C12.8585 6.73688 12.5571 7.01961 12.5571 7.36844C12.5571 7.71727 12.8586 8 13.2303 8H15.0256C15.3975 8 15.6988 7.71727 15.6988 7.36844C15.6988 7.01961 15.3975 6.73688 15.0256 6.73688Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M31.1832 6.73688H17.7186C17.3468 6.73688 17.0454 7.01961 17.0454 7.36844C17.0454 7.71727 17.3469 8 17.7186 8H31.1832C31.555 8 31.8564 7.71727 31.8564 7.36844C31.8564 7.01961 31.555 6.73688 31.1832 6.73688Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M38.6973 21.8948H30.7494C30.3775 21.8948 30.0762 22.1776 30.0762 22.5263C30.0762 22.8752 30.3776 23.1579 30.7494 23.1579H38.5887V32.8421H35.3385C34.6549 32.8421 34.1006 33.362 34.1006 34.0034V35.3684H10.3131V34.0034C10.3131 33.362 9.75893 32.8421 9.07523 32.8421H5.82494V23.1579H27.781C28.1528 23.1579 28.4542 22.8751 28.4542 22.5263C28.4542 22.1775 28.1527 21.8948 27.781 21.8948H5.71643C5.03272 21.8948 4.47852 22.4147 4.47852 23.0561V32.9439C4.47852 33.5853 5.03272 34.1052 5.71643 34.1052H8.96664V35.4702C8.96664 36.1117 9.52085 36.6316 10.2045 36.6316H34.2091C34.8927 36.6316 35.447 36.1117 35.447 35.4702V34.1052H38.6972C39.3808 34.1052 39.9351 33.5853 39.9351 32.9439V23.0561C39.9352 22.4147 39.381 21.8948 38.6973 21.8948Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M15.0256 29.4737C13.6645 29.4737 12.5571 30.5126 12.5571 31.7895C12.5571 33.0663 13.6645 34.1053 15.0256 34.1053C16.3868 34.1053 17.4941 33.0663 17.4941 31.7895C17.4941 30.5126 16.3869 29.4737 15.0256 29.4737ZM15.0256 32.8421C14.4069 32.8421 13.9035 32.3699 13.9035 31.7895C13.9035 31.209 14.4069 30.7368 15.0256 30.7368C15.6444 30.7368 16.1477 31.209 16.1477 31.7895C16.1477 32.3699 15.6444 32.8421 15.0256 32.8421Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M22.2068 29.4737C20.8456 29.4737 19.7383 30.5126 19.7383 31.7895C19.7383 33.0663 20.8456 34.1053 22.2068 34.1053C23.5679 34.1053 24.6753 33.0663 24.6753 31.7895C24.6753 30.5126 23.5679 29.4737 22.2068 29.4737ZM22.2068 32.8421C21.588 32.8421 21.0847 32.3699 21.0847 31.7895C21.0847 31.209 21.588 30.7368 22.2068 30.7368C22.8255 30.7368 23.3288 31.209 23.3288 31.7895C23.3288 32.3699 22.8255 32.8421 22.2068 32.8421Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M29.3879 29.4737C28.0268 29.4737 26.9194 30.5126 26.9194 31.7895C26.9194 33.0663 28.0268 34.1053 29.3879 34.1053C30.7491 34.1053 31.8564 33.0663 31.8564 31.7895C31.8564 30.5126 30.7491 29.4737 29.3879 29.4737ZM29.3879 32.8421C28.7692 32.8421 28.2659 32.3699 28.2659 31.7895C28.2659 31.209 28.7692 30.7368 29.3879 30.7368C30.0067 30.7368 30.51 31.209 30.51 31.7895C30.51 32.3699 30.0066 32.8421 29.3879 32.8421Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M18.6162 24.421C17.255 24.421 16.1477 25.4599 16.1477 26.7368C16.1477 28.0137 17.255 29.0526 18.6162 29.0526C19.9774 29.0526 21.0847 28.0137 21.0847 26.7368C21.0847 25.4599 19.9774 24.421 18.6162 24.421ZM18.6162 27.7895C17.9975 27.7895 17.4941 27.3173 17.4941 26.7368C17.4941 26.1563 17.9975 25.6841 18.6162 25.6841C19.2349 25.6841 19.7383 26.1563 19.7383 26.7368C19.7383 27.3173 19.2349 27.7895 18.6162 27.7895Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M25.7973 24.421C24.4362 24.421 23.3289 25.4599 23.3289 26.7368C23.3289 28.0137 24.4362 29.0526 25.7973 29.0526C27.1585 29.0526 28.2658 28.0137 28.2658 26.7368C28.2658 25.4599 27.1585 24.421 25.7973 24.421ZM25.7973 27.7895C25.1786 27.7895 24.6753 27.3173 24.6753 26.7368C24.6753 26.1563 25.1786 25.6841 25.7973 25.6841C26.4161 25.6841 26.9194 26.1563 26.9194 26.7368C26.9194 27.3173 26.4161 27.7895 25.7973 27.7895Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M32.9785 24.421C31.6173 24.421 30.51 25.4599 30.51 26.7368C30.51 28.0137 31.6173 29.0526 32.9785 29.0526C34.3397 29.0526 35.447 28.0137 35.447 26.7368C35.447 25.4599 34.3397 24.421 32.9785 24.421ZM32.9785 27.7895C32.3598 27.7895 31.8564 27.3173 31.8564 26.7368C31.8564 26.1563 32.3598 25.6841 32.9785 25.6841C33.5972 25.6841 34.1006 26.1563 34.1006 26.7368C34.1006 27.3173 33.5972 27.7895 32.9785 27.7895Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M11.4353 24.421C10.0741 24.421 8.9668 25.4599 8.9668 26.7368C8.9668 28.0137 10.0741 29.0526 11.4353 29.0526C12.7964 29.0526 13.9038 28.0137 13.9038 26.7368C13.9038 25.4599 12.7964 24.421 11.4353 24.421ZM11.4353 27.7895C10.8165 27.7895 10.3132 27.3173 10.3132 26.7368C10.3132 26.1563 10.8165 25.6841 11.4353 25.6841C12.054 25.6841 12.5574 26.1563 12.5574 26.7368C12.5574 27.3173 12.054 27.7895 11.4353 27.7895Z"
                  fill="#6BDE3B"
                />
                <path
                  d="M38.3643 9.68422H42.8525C43.2243 9.68422 43.5257 9.40156 43.5257 9.05266V2.31578C43.5257 1.96687 43.2242 1.68422 42.8525 1.68422H38.3643C37.9924 1.68422 37.6911 1.96687 37.6911 2.31578V3.36844H35.447V2.12859C35.4469 0.954922 34.4291 0 33.1779 0H11.2358C9.98452 0 8.96671 0.954922 8.96671 2.12859V3.36844H6.72256V2.31578C6.72256 1.96687 6.4211 1.68422 6.04935 1.68422H1.56115C1.1894 1.68422 0.887939 1.96687 0.887939 2.31578V9.05266C0.887939 9.40156 1.1894 9.68422 1.56115 9.68422H6.04935C6.42119 9.68422 6.72256 9.40156 6.72256 9.05266V8H8.96663V10.1052H8.42999C6.74605 10.1052 5.37606 11.3905 5.37606 12.9702V13.4737H5.35949C2.89391 13.4737 0.887939 15.3555 0.887939 17.6686V35.8049C0.887939 38.1181 2.89391 40 5.35949 40H39.054C41.5197 40 43.5257 38.1181 43.5257 35.8051V17.6686C43.5257 15.3555 41.5197 13.4737 39.0541 13.4737H39.0376V12.9702C39.0376 11.3904 37.6676 10.1052 35.9836 10.1052H35.447V8H37.6911V9.05266C37.6911 9.40148 37.9924 9.68422 38.3643 9.68422ZM39.0375 7.36844V4V2.94734H42.1792V8.42102H39.0375V7.36844ZM5.37614 4V7.36844V8.42109H2.23436V2.94734H5.37606L5.37614 4ZM10.3131 7.36844V4V2.12859C10.3131 1.65141 10.727 1.26312 11.2358 1.26312H33.178C33.6866 1.26312 34.1006 1.65133 34.1006 2.12859V4V7.36844V10.1053H32.3648H22.2135C22.213 10.1053 22.2125 10.1053 22.212 10.1053H12.049H10.3131V7.36844ZM24.19 12.2548L29.0896 14.2977C28.4225 14.8797 27.674 15.3746 26.8659 15.7695L24.19 12.2548ZM25.6051 16.2867C24.7386 16.578 23.8233 16.761 22.88 16.8201V12.7076L25.6051 16.2867ZM25.3792 11.3684H31.3632C31.0124 12.0748 30.5731 12.7286 30.0619 13.3209L25.3792 11.3684ZM20.2237 12.2548L17.5476 15.7695C16.7396 15.3746 15.991 14.8797 15.324 14.2977L20.2237 12.2548ZM14.3516 13.3209C13.8404 12.7287 13.4012 12.0748 13.0504 11.3684H19.0344L14.3516 13.3209ZM21.5336 12.7077V16.8202C20.5904 16.761 19.675 16.578 18.8085 16.2868L21.5336 12.7077ZM6.72256 6.73688V4.63156H8.96663V6.7368L6.72256 6.73688ZM39.0375 17.7666V14.7368H39.054C40.7772 14.7368 42.1792 16.052 42.1792 17.6686V35.8049C42.1792 37.4216 40.7772 38.7368 39.054 38.7368H5.35949C3.63632 38.7368 2.23436 37.4216 2.23436 35.805V17.6686C2.23436 16.052 3.63632 14.7368 5.35949 14.7368H5.37606V17.7666C5.37606 19.3463 6.74605 20.6316 8.42999 20.6316H35.9835C37.6675 20.6316 39.0375 19.3463 39.0375 17.7666ZM35.9835 11.3684C36.9251 11.3684 37.6911 12.087 37.6911 12.9702V17.7666C37.6911 18.6498 36.9251 19.3684 35.9835 19.3684H8.43007C7.48854 19.3685 6.72256 18.6499 6.72256 17.7667V12.9703C6.72256 12.087 7.48854 11.3684 8.43007 11.3684H9.63992H11.5841C13.3162 15.4161 17.5253 18.1053 22.2068 18.1053C26.8883 18.1053 31.0974 15.4161 32.8295 11.3684H34.7737H35.9835ZM35.4469 6.73688V4.63156H37.691V6.7368L35.4469 6.73688Z"
                  fill="#6BDE3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_9_44">
                  <rect
                    width="42.6377"
                    height="40"
                    fill="white"
                    transform="translate(0.887939)"
                  />
                </clipPath>
              </defs>
            </svg>
            <h1 className="heading-text">nerdtype</h1>
            
          </nav>
        </div>
        <button type="button" onClick={() => navigate("/game/create")}>
          Create Game
        </button>
        <button type="button" onClick={() => navigate("/game/join")}>
          Join Game
        </button>
      </div>
    </div>
  );
};

export default GameMenu;
