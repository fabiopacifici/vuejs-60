<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <div class="row">
              <FooterMenuItem
                :menuTitle="title"
                :menuLinks="links"
                v-for="({ title, links }, index) in footerMenu"
                :key="index"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <a href="#" class="btn-outline-primary">Sign-up now!</a>
          </div>
          <div class="col-6 text-right">
            <div class="social">
              <span>Follow us</span>
              <span>
                <img src="@/assets/img/footer-facebook.png" alt="" />
                <img src="@/assets/img/footer-twitter.png" alt="" />
                <img src="@/assets/img/footer-youtube.png" alt="" />
                <img src="@/assets/img/footer-pinterest.png" alt="" />
                <img src="@/assets/img/footer-periscope.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import FooterMenuItem from "@/components/FooterMenuItem.vue";
export default {
  name: "SiteFooter",
  components: {
    FooterMenuItem,
  },
  data() {
    return {
      footerMenu: [
        {
          title: "DC Comics",
          links: [
            {
              href: "#",
              text: "Characters",
            },
            {
              href: "#",
              text: "Comics",
            },
            {
              href: "#",
              text: "Movies",
            },
            {
              href: "#",
              text: "TV",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
          ],
        },
        {
          title: "DC",
          links: [
            {
              href: "#",
              text: "Terms of Use",
            },
            {
              href: "#",
              text: "Privacy Policy",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
          ],
        },
        {
          title: "Sites",
          links: [
            {
              href: "#",
              text: "DC",
            },
            {
              href: "#",
              text: "MAD Magazine",
            },
            {
              href: "#",
              text: "Lorem",
            },
            {
              href: "#",
              text: "Lorem",
            },
          ],
        },
        {
          title: "Shop",
          links: [
            {
              href: "#",
              text: "Shop DC",
            },
            {
              href: "#",
              text: "Lorem",
            },
          ],
        },
        {
          title: "Shop",
          links: [
            {
              href: "#",
              text: "Shop DC",
            },
            {
              href: "#",
              text: "Lorem",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss">
footer {
  background-image: url("@/assets/img/dc-logo-bg.png"),
    url("@/assets/img/footer-bg.jpg");
  background-repeat: no-repeat, no-repeat;
  background-size: contain, cover;
  background-position: top right, top center;
  color: $dc-white;

  .footer-top {
    padding: 2rem;
    a {
      color: $dc-ligther-dark;
    }
  }
  h3 {
    margin: 1.5rem 0;
  }
  .footer-bottom {
    background-color: $dc-light-dark;
    padding: 2rem 0;
    .social {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      column-gap: 1rem;
      img {
        margin-right: 1rem;
      }
    }
  }

  ul {
    list-style: none;
  }
}
</style>