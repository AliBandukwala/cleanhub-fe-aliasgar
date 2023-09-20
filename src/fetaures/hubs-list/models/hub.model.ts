interface CardImage {
    directLink: string;
    fileName: string;
    processedDirectLink: null;
    processedThumbnailDirectLink: null;
    size: number;
    thumbnailDirectLink: string;
    uuid: string;
  }

  interface Logo extends CardImage {
    
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
    logo: Logo | null,
    name: string;
    pageMode: string;
    parentHubName: string | null;
    portfolioAssignedQuantityPercentage: number | null;
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
  