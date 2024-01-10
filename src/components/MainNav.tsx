import SearchInput from "./SearchInput";

export default function MainNav() {
  return (
    <nav className="flex items-center content-center justify-between w-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 125"
        enable-background="new 0 0 100 100"
        stroke="currentColor"
        className="size-14"
      >
        <g>
          <path d="M50.867,11.218c-21.379,0-38.782,17.406-38.782,38.782c0,21.379,17.403,38.782,38.782,38.782   c21.378,0,38.782-17.403,38.782-38.782C89.649,28.624,72.245,11.218,50.867,11.218z M59.03,50c0,4.512-3.651,8.166-8.163,8.166   c-4.513,0-8.164-3.654-8.164-8.166s3.651-8.164,8.164-8.164C55.379,41.836,59.03,45.488,59.03,50z M21.958,40.352   c3.209-12.311,14.037-20.821,26.441-22.115c3.391-0.354,3.355,4.938,0,5.288c-10.062,1.051-18.767,8.354-21.342,18.231   C26.197,45.055,21.098,43.654,21.958,40.352z M50.867,82.338c-14.753,0-27.25-10.078-31.131-23.483   c-0.005-0.041-0.005-0.066-0.011-0.11c-0.73-5.348,2.198-5.521,2.492-5.521H34.79c0.682,0.279,1.739,1.141,3.146,3.488   c2.451,4.646,7.264,7.899,12.822,7.899c5.373,0,10.184-3.034,12.713-7.429c0.025-0.044,0.046-0.069,0.073-0.115   c1.517-2.633,2.644-3.551,3.36-3.844h12.608c0.294,0,3.223,0.174,2.493,5.521c-0.008,0.044-0.008,0.069-0.012,0.11   C78.114,72.26,65.62,82.338,50.867,82.338z" />
        </g>
      </svg>
      <SearchInput />
    </nav>
  );
}
