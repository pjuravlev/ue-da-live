import { createOptimizedPicture } from '../../scripts/aem.js';
import { getContent } from '../../scripts/utils.js';

function createCard(card) {
  const hpeCard = document.createElement('hpe-card');
  hpeCard.setAttribute('variant', 'default');
  //hpeCard.style.setProperty('max-width', '370px');
  const content = getContent(card, {
    image: { $: 'div:nth-of-type(1) > picture', type: 'html' },
    heading: { $: 'div:nth-of-type(2) > h1' },
    description: { $: 'div:nth-of-type(2) > p', type: 'html' },
  });
  hpeCard.innerHTML = [
    content.image ? `<hpe-image slot="media" src="${content.image.querySelector('img').src}" alt="Abstract blue glass texture" aspect-ratio="16:9"></hpe-image>` : ``,
    `<span slot="tagline">Tagline label</span>`,
    content.heading ? `<span slot="heading">${content.heading}</span>` : ``,
    content.description ? `<hpe-paragraph slot="body" size="md">${content.description.innerHTML}</hpe-paragraph>` : ``,
    `          <hpe-button-group slot="actions" orientation="vertical">
            
                <hpe-button type="link-primary" size="default">
                  Learn more
                </hpe-button>
              
                <hpe-button type="link-neutral" size="default">
                  Contact us
                </hpe-button>
              
          </hpe-button-group>`
  ].filter(Boolean).join('');
  return hpeCard;
}

export default function decorate(block) {
  [...block.children].forEach((row) => {
    const item = createCard(row);
    block.replaceChild(item, row);
  });
}
