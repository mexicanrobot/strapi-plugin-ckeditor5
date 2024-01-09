import React from "react";
import PropTypes from "prop-types";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-build-strapi-wysiwyg";
import styled from "styled-components";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }

    /* Fixes https://github.com/strapi/strapi/issues/11849 */
    /* Fix line height */
    .ck-editor__editable {
      /* line-height: initial; */
      line-height: 1.75;
    }
    /* Revert font styling */
    /* div, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { */
      /* font: revert; */
    /* } */
    /* Revert list styling */
    ul.todo-list {
      list-style: none;
    }
    ul, ol {
      list-style: initial;
    }

    li {
      margin-left: 24px;
      margin-bottom: 16px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 24px;

      @media(min-width: 768px) {
        font-size: 18px;
        line-height: 32px;
        margin-bottom: 32px;
      }
    }

    h1 {
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 24px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 36px;
        line-height: 48px;
      }

      @media(min-width: 992px) {
        font-size: 60px;
        line-height: 84px;
        margin-bottom: 32px;
      }
    }

    h1 {
      font-size: 30px;
      line-height: 40px;
      margin-bottom: 24px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 36px;
        line-height: 48px;
      }

      @media(min-width: 992px) {
        font-size: 60px;
        line-height: 84px;
        margin-bottom: 32px;
      }
    }

    h2 {
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 16px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 30px;
        line-height: 40px;
      }

      @media(min-width: 992px) {
        font-size: 48px;
        line-height: 64px;
        margin-bottom: 24px;
      }
    }

    h3 {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 16px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 24px;
        line-height: 36px;
      }

      @media(min-width: 992px) {
        font-size: 36px;
        line-height: 48px;
        margin-bottom: 24px;
      }
    }

    h4 {
      font-size: 18px;
      line-height: 28px;
      margin-bottom: 8px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 20px;
        line-height: 32px;
      }

      @media(min-width: 992px) {
        font-size: 24px;
        line-height: 36px;
        margin-bottom: 16px;
      }
    }

    h5 {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 8px;
      font-weight: 900;

      @media(min-width: 768px) {
        font-size: 18px;
        line-height: 28px;
      }

      @media(min-width: 992px) {
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 16px;
      }
    }

    h6 {
      font-size: 24px;
      line-height: 36px;
      margin-bottom: 36;
      font-weight: 900;
    }
  }
`;

const Editor = ({ onChange, name, value, config }) => {
  return (
    <Wrapper>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onReady={(editor) => {
          editor.setData(value);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={config}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};

export default Editor;
