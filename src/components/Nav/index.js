import PropTypes from "prop-types"
import React, {Component} from "react"
import {injectIntl, intlShape} from "react-intl"
import enhanceCollection from "phenomic/lib/enhance-collection"
import {IndexLink, Link} from "react-router"
import classNames from "classnames"

import {customFilter} from "utils/collection"

import Content from "components/Content"

import styles from "./index.css"

class Nav extends Component {
  render() {
    const {collection, router} = this.context
    const {intl} = this.props

    const homePage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Homepage"),
    }).shift()

    const cottagesCategoriesPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "CottagesCategories"),
    }).shift()

    const cottagesCategories = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "CottagesCategory"),
      sort: "position",
    })
    const servicesPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Services"),
    }).shift()

    const services = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Service"),
      sort: "position",
    })

    const photosPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Photos"),
    }).shift()

    const regionPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Region"),
    }).shift()

    const groupsPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Groups"),
    }).shift()

    const groups = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, ["Group", "Seminar"]),
      sort: "position",
    })

    const newsPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Posts"),
    }).shift()

    const contactPage = enhanceCollection(collection, {
      filter: (page) => customFilter(page, intl.locale, "Contact"),
    }).shift()

    return (
      <div className={styles.wrapper}>
        <Content>
          <nav className={classNames(styles.nav, this.props.open && styles.nav_open)}>
            <ul className={styles.list}>
              {homePage &&
                <li className={styles.item}>
                  <IndexLink to={homePage.__url} className={classNames(styles.link, {
                    [styles.link_active]: router.isActive("/") || router.isActive(`/${intl.locale}`),
                  })}>
                    {homePage.navTitle
                      ? homePage.navTitle
                      : homePage.title
                    }
                  </IndexLink>
                </li>
              }
              {cottagesCategoriesPage &&
                <li className={styles.item}>
                  <Link to={cottagesCategoriesPage.__url} className={classNames(styles.link, {
                    [styles.link_active]: router.isActive(cottagesCategoriesPage.__url)
                      || cottagesCategories.some(category => router.isActive(category.__url)),
                  })}>
                  {cottagesCategoriesPage.navTitle
                    ? cottagesCategoriesPage.navTitle
                    : cottagesCategoriesPage.title
                  }
                  </Link>
                  {cottagesCategories && cottagesCategories.length > 0 &&
                    <ul className={styles.sublist}>
                      {cottagesCategories.map((category, i) => (
                        <li key={i} className={styles.item}>
                          <Link className={styles.link} to={category.__url} activeClassName={styles.link_active}>
                            {category.navTitle ? category.navTitle : category.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              }
              {servicesPage &&
                <li className={styles.item}>
                  <Link to={servicesPage.__url} className={classNames(styles.link, {
                    [styles.link_active]: router.isActive(servicesPage.__url)
                      || services.some(service => router.isActive(service.__url)),
                  })}>
                  {servicesPage.navTitle
                    ? servicesPage.navTitle
                    : servicesPage.title
                  }
                  </Link>
                  {services && services.length > 0 &&
                    <ul className={styles.sublist}>
                      {services.map((service, i) => (
                        <li key={i} className={styles.item}>
                          <Link className={styles.link} to={service.__url} activeClassName={styles.link_active}>
                            {service.navTitle ? service.navTitle : service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              }
              {photosPage &&
                <li className={styles.item}>
                  <Link className={styles.link} to={photosPage.__url} activeClassName={styles.link_active}>
                    {photosPage.navTitle
                      ? photosPage.navTitle
                      : photosPage.title
                    }
                  </Link>
                </li>
              }
              {regionPage &&
                <li className={styles.item}>
                  <Link className={styles.link} to={regionPage.__url} activeClassName={styles.link_active}>
                    {regionPage.navTitle
                      ? regionPage.navTitle
                      : regionPage.title
                    }
                  </Link>
                </li>
              }
              {groupsPage &&
                <li className={styles.item}>
                  <Link to={groupsPage.__url} activeClassName={styles.link_active} className={classNames(styles.link, {
                    [styles.link_active]: router.isActive(groupsPage.__url)
                      || groups.some(group => router.isActive(group.__url)),
                  })}>
                  {groupsPage.navTitle
                    ? groupsPage.navTitle
                    : groupsPage.title
                  }
                  </Link>
                  {groups && groups.length > 0 &&
                    <ul className={styles.sublist}>
                      {groups.map((group, i) => (
                        <li key={i} className={styles.item}>
                          <Link className={styles.link} to={group.__url} activeClassName={styles.link_active}>
                            {group.navTitle ? group.navTitle : group.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  }
                </li>
              }
              {newsPage &&
                <li className={styles.item}>
                  <Link className={styles.link} to={newsPage.__url} activeClassName={styles.link_active}>
                    {newsPage.navTitle
                      ? newsPage.navTitle
                      : newsPage.title
                    }
                  </Link>
                </li>
              }
              {contactPage &&
                <li className={styles.item}>
                  <Link className={styles.link} to={contactPage.__url} activeClassName={styles.link_active}>
                    {contactPage.navTitle
                      ? contactPage.navTitle
                      : contactPage.title
                    }
                  </Link>
                </li>
              }
            </ul>
          </nav>
        </Content>
      </div>
    )
  }
}

Nav.propTypes = {
  intl: intlShape.isRequired,
  open: PropTypes.bool.isRequired,
}

Nav.contextTypes = {
  collection: PropTypes.array.isRequired,
  router: PropTypes.object.isRequired,
}

export default injectIntl(Nav)
