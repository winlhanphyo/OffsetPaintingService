import { processAssociations } from './associate.decorator';

export * from './user.model';
export * from './category.model';
export * from './product.model';
export * from './order.model';
export * from './orderDetail.model';
export * from './media.model';
export * from './productMedia.model';
export * from './banner.model';
export * from './article.model';
export * from './package.model';
export * from './packageProduct.model';

processAssociations();