/**
 *
 * Asynchronously loads the component for Shoe
 *
 */
import loadable from "@loadable/component";
export default loadable(() => import('./index'));