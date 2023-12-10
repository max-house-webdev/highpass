import { Icon, IconProps } from "@chakra-ui/react";

import { colors } from "@core/theme/colors";

export interface ILogoProps extends IconProps {
  fillWhite?: string;
  fillAccent?: string;
}

export function Logo(props: ILogoProps) {
  const { brand } = colors;
  const { white, accent } = brand;

  const { fillWhite = white, fillAccent = accent, ...rest } = props;

  return (
    <Icon
      width="112"
      height="18"
      viewBox="0 0 112 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        d="M25.2119 14.6579V2.34524H28.466V6.91853H33.2152V2.34524H36.4692V14.6579H33.2152V9.90876H28.466V14.6579H25.2119Z"
        fill={fillWhite}
      />
      <path
        d="M38.3958 3.04883C38.3958 2.62668 38.5542 2.27488 38.8708 1.99345C39.1874 1.70029 39.5861 1.55371 40.0669 1.55371C40.5476 1.55371 40.9463 1.70029 41.2629 1.99345C41.5796 2.27488 41.7379 2.62668 41.7379 3.04883C41.7379 3.45925 41.5796 3.81104 41.2629 4.1042C40.9463 4.39736 40.5476 4.54394 40.0669 4.54394C39.5861 4.54394 39.1874 4.39736 38.8708 4.1042C38.5542 3.81104 38.3958 3.45925 38.3958 3.04883ZM38.5717 14.6579V5.51137H41.562V14.6579H38.5717Z"
        fill={fillWhite}
      />
      <path
        d="M44.2404 13.2684C43.4547 12.4006 43.0619 11.2807 43.0619 9.90876C43.0619 8.53677 43.4547 7.4169 44.2404 6.54915C45.0261 5.6814 45.9818 5.24752 47.1075 5.24752C47.9166 5.24752 48.6143 5.48205 49.2007 5.9511C49.4704 6.16218 49.6814 6.39671 49.8339 6.65469H50.0098V5.51137H53V18H44.2932V15.6254H50.0098V13.2508H49.8339C49.6697 13.5088 49.4586 13.7316 49.2007 13.9192C48.6261 14.3531 47.9283 14.57 47.1075 14.57C45.9818 14.57 45.0261 14.1361 44.2404 13.2684ZM46.6678 8.36088C46.316 8.73612 46.1401 9.25208 46.1401 9.90876C46.1401 10.5654 46.316 11.0814 46.6678 11.4566C47.0196 11.8319 47.4886 12.0195 48.0749 12.0195C48.6612 12.0195 49.1303 11.8319 49.4821 11.4566C49.8339 11.0814 50.0098 10.5654 50.0098 9.90876C50.0098 9.25208 49.8339 8.73612 49.4821 8.36088C49.1303 7.98563 48.6612 7.79801 48.0749 7.79801C47.4886 7.79801 47.0196 7.98563 46.6678 8.36088Z"
        fill={fillWhite}
      />
      <path
        d="M54.7507 14.6579V2.34524H57.7409V6.74264H57.9168C58.081 6.4612 58.2921 6.21495 58.5501 6.00387C59.1481 5.49964 59.8458 5.24752 60.6432 5.24752C61.7221 5.24752 62.5605 5.57586 63.1585 6.23254C63.7683 6.87749 64.0732 7.80974 64.0732 9.02928V14.6579H61.083V9.46902C61.083 8.94133 60.9422 8.53091 60.6608 8.23775C60.3794 7.94459 59.9924 7.79801 59.4999 7.79801C58.9957 7.79801 58.5735 7.98563 58.2335 8.36088C57.9051 8.7244 57.7409 9.21104 57.7409 9.82081V14.6579H54.7507Z"
        fill={fillWhite}
      />
      <path
        d="M70.6741 18V5.51137H73.6643V6.74264H73.8402C74.0044 6.47293 74.2272 6.22668 74.5086 6.00387C75.1536 5.49964 75.8396 5.24752 76.5666 5.24752C77.6923 5.24752 78.648 5.69313 79.4337 6.58433C80.2194 7.46381 80.6122 8.63058 80.6122 10.0847C80.6122 11.5387 80.2194 12.7114 79.4337 13.6026C78.648 14.482 77.6923 14.9218 76.5666 14.9218C75.8278 14.9218 75.1418 14.6755 74.5086 14.183C74.2272 13.9602 74.0044 13.7081 73.8402 13.4267H73.6643V18H70.6741ZM74.192 8.39606C73.8402 8.79475 73.6643 9.35762 73.6643 10.0847C73.6643 10.8117 73.8402 11.3746 74.192 11.7733C74.5438 12.172 75.0129 12.3713 75.5992 12.3713C76.1855 12.3713 76.6546 12.172 77.0063 11.7733C77.3581 11.3746 77.534 10.8117 77.534 10.0847C77.534 9.35762 77.3581 8.79475 77.0063 8.39606C76.6546 7.99736 76.1855 7.79801 75.5992 7.79801C75.0129 7.79801 74.5438 7.99736 74.192 8.39606Z"
        fill={fillWhite}
      />
      <path
        d="M82.8378 13.6026C82.0522 12.7114 81.6593 11.5387 81.6593 10.0847C81.6593 8.63058 82.0522 7.46381 82.8378 6.58433C83.6235 5.69313 84.5792 5.24752 85.7049 5.24752C86.432 5.24752 87.118 5.49964 87.7629 6.00387C88.0326 6.22668 88.2554 6.47293 88.4313 6.74264H88.6072V5.51137H91.5974V14.6579H88.6072V13.4267H88.4313C88.2671 13.7081 88.0443 13.9602 87.7629 14.183C87.1297 14.6755 86.4437 14.9218 85.7049 14.9218C84.5792 14.9218 83.6235 14.482 82.8378 13.6026ZM85.2652 8.39606C84.9134 8.79475 84.7375 9.35762 84.7375 10.0847C84.7375 10.8117 84.9134 11.3746 85.2652 11.7733C85.617 12.172 86.086 12.3713 86.6724 12.3713C87.2587 12.3713 87.7277 12.172 88.0795 11.7733C88.4313 11.3746 88.6072 10.8117 88.6072 10.0847C88.6072 9.35762 88.4313 8.79475 88.0795 8.39606C87.7277 7.99736 87.2587 7.79801 86.6724 7.79801C86.086 7.79801 85.617 7.99736 85.2652 8.39606Z"
        fill={fillWhite}
      />
      <path
        d="M92.8205 11.6677H95.8107C95.8576 11.8436 95.9573 12.0078 96.1097 12.1602C96.4263 12.4768 96.8837 12.6351 97.4817 12.6351C98.3026 12.6351 98.713 12.4299 98.713 12.0195C98.713 11.8319 98.5957 11.6853 98.3612 11.5798C98.1267 11.4625 97.7749 11.3452 97.3058 11.228C96.9188 11.1342 96.6667 11.0755 96.5495 11.0521C96.4322 11.0286 96.1859 10.9641 95.8107 10.8586C95.4354 10.7413 95.1657 10.6417 95.0016 10.5596C94.8491 10.4658 94.6322 10.3368 94.3508 10.1726C94.0811 9.99671 93.8817 9.82081 93.7527 9.64492C93.6355 9.45729 93.5241 9.22863 93.4185 8.95892C93.313 8.67749 93.2602 8.37847 93.2602 8.06185C93.2602 7.28791 93.6061 6.62537 94.298 6.07423C94.9899 5.52309 95.9631 5.24752 97.2179 5.24752C98.7892 5.24752 100.032 5.76348 100.947 6.7954C101.31 7.24101 101.562 7.7511 101.703 8.3257H98.8009C98.7306 8.13808 98.6485 7.9915 98.5547 7.88596C98.285 7.5928 97.898 7.44622 97.3938 7.44622C96.6902 7.44622 96.3384 7.65143 96.3384 8.06185C96.3384 8.2612 96.4556 8.41365 96.6902 8.51918C96.9247 8.62472 97.2824 8.7244 97.7631 8.81821C98.971 9.09964 99.7859 9.34589 100.208 9.55697C101.263 10.0729 101.791 10.8645 101.791 11.9316C101.791 12.7759 101.416 13.4853 100.665 14.0599C99.9267 14.6345 98.8654 14.9218 97.4817 14.9218C95.7814 14.9218 94.4856 14.3824 93.5944 13.3035C93.1957 12.8228 92.9377 12.2775 92.8205 11.6677Z"
        fill={fillWhite}
      />
      <path
        d="M102.577 11.6677H105.567C105.614 11.8436 105.714 12.0078 105.866 12.1602C106.183 12.4768 106.64 12.6351 107.238 12.6351C108.059 12.6351 108.47 12.4299 108.47 12.0195C108.47 11.8319 108.352 11.6853 108.118 11.5798C107.883 11.4625 107.532 11.3452 107.063 11.228C106.676 11.1342 106.423 11.0755 106.306 11.0521C106.189 11.0286 105.943 10.9641 105.567 10.8586C105.192 10.7413 104.922 10.6417 104.758 10.5596C104.606 10.4658 104.389 10.3368 104.107 10.1726C103.838 9.99671 103.638 9.82081 103.509 9.64492C103.392 9.45729 103.281 9.22863 103.175 8.95892C103.07 8.67749 103.017 8.37847 103.017 8.06185C103.017 7.28791 103.363 6.62537 104.055 6.07423C104.747 5.52309 105.72 5.24752 106.975 5.24752C108.546 5.24752 109.789 5.76348 110.704 6.7954C111.067 7.24101 111.319 7.7511 111.46 8.3257H108.558C108.487 8.13808 108.405 7.9915 108.311 7.88596C108.042 7.5928 107.655 7.44622 107.15 7.44622C106.447 7.44622 106.095 7.65143 106.095 8.06185C106.095 8.2612 106.212 8.41365 106.447 8.51918C106.681 8.62472 107.039 8.7244 107.52 8.81821C108.728 9.09964 109.543 9.34589 109.965 9.55697C111.02 10.0729 111.548 10.8645 111.548 11.9316C111.548 12.7759 111.173 13.4853 110.422 14.0599C109.683 14.6345 108.622 14.9218 107.238 14.9218C105.538 14.9218 104.242 14.3824 103.351 13.3035C102.952 12.8228 102.694 12.2775 102.577 11.6677Z"
        fill={fillWhite}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.51792 3.51792V14.0717H14.0717L3.51792 3.51792ZM0 0V17.5896H17.5896V0H0Z"
        fill={fillAccent}
      />
    </Icon>
  );
}
