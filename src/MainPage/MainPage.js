import React from "react";
import "./MainPage.css";
import RoutesInfo from "../RoutesInfo/RoutesInfo.js";

function MainPage() {
  return (
    <div className="MainPage">
      <div className="MainPageImage">
        <img
          src="https://images.squarespace-cdn.com/content/v1/58bda1d6d482e9728ba1f5b7/1615914033638-9EQE6GIOG6971YAR1PEK/ke17ZwdGBToddI8pDm48kA5MC_ZF8Hs_QB15lcL-Mf97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTJl5Fk-tTvhNc4BpztFYVO1Vy5TrwNSVcrLo4puG69lOpYghpI-Ha_TwZsqqmJXng/TG-Map-web.png?format=1633w"
          alt="route board"
        />{" "}
      </div>
      <div className="routes">
        <div>
          <h2>Routes:</h2>
          <form>
            <div className="filterObject">
              <label>
                {" "}
                Grade:{" "}
                <select>
                  <option>Any</option>
                  <option>B</option>
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </select>
              </label>
            </div>
            <div className="filterObject">
              <label>
                {" "}
                Section:
                <select>
                  <option>Any</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                  <option>10</option>
                  <option>11</option>
                  <option>12</option>
                  <option>13</option>
                  <option>14</option>
                  <option>15</option>
                  <option>16</option>
                  <option>17</option>
                  <option>18</option>
                  <option>19</option>
                  <option>20</option>
                  <option>21</option>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                </select>
              </label>
            </div>
          </form>
        </div>
        <RoutesInfo />
      </div>
    </div>
  );
}

export default MainPage;
