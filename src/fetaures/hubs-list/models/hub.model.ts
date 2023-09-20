interface CardImage {
    directLink: string;
    fileName: string;
    processedDirectLink: null;
    processedThumbnailDirectLink: null;
    size: number;
    thumbnailDirectLink: string;
    uuid: string;
  }

  interface Logo {
    directLink: string;
    fileName: string;
    processedDirectLink: null;
    processedThumbnailDirectLink: null;
    size: number;
    thumbnailDirectLink: string;
    uuid: string;
  }

  interface HubUnassignedRecovery {
    assignedQuantity: number;
    createdAt: string;
    quantityUnit: string;
    state: string;
    unassignedQuantity: number;
    uuid: string;
  }
  
  export interface Hub {
    assignable: boolean;
    cardDescription: string;
    cardImage: CardImage;
    category: string;
    collectionAndSortingParagraph: string;
    displayName: string;
    externalId: string;
    formattedRecoveredQuantity: string;
    formattedTotalRecoveredQuantity: string;
    hubUnassignedRecoveryList: HubUnassignedRecovery[];
    length: number;
    location: string;
    logo: Logo,
    name: string;
    pageMode: string;
    parentHubName: string;
    portfolioAssignedQuantityPercentage: null;
    recoveredQuantity: number;
    recoveredQuantityUnit: string;
    referenceQuantityUnit: string;
    slug: string;
    stage: string;
    state: string;
    thankYouNote: string;
    totalRecoveredQuantity: number;
    type: string;
    unassignedQuantityPercentage: number;
    unassignedQuantityTotal: number;
    uuid: string;
  }
  