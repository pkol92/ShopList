import React, { FC } from "react";

import { Modal } from "../Modal";
import { Container } from "./styles";

export const AddNewRecordModal: FC = () => {
  

  return (
    <Modal>
      <Container>
        {/* Task #2 */}
        <div>
          <form>
            <label>
              Name
              <input type="text" />
            </label>

            <label>
              Description
              <input type="text" />
            </label>

            <label>
              Price
              <input type="number" />
            </label>

            <label>
              Weight
              <input type="number" />
            </label>
          </form>
        </div>
        Task #7
      </Container>
    </Modal>
  );
};
