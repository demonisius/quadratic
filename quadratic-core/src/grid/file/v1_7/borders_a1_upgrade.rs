use crate::grid::file::v1_7_1::{BorderStyleTimestampSchema, BordersSchema};

use super::{Contiguous2DUpgrade, schema::BorderStyleCellSchema};

use crate::grid::file::add_import_offset_to_contiguous_2d_rect;

#[derive(Default)]
pub struct BordersUpgrade {
    pub left: Contiguous2DUpgrade<Option<BorderStyleTimestampSchema>>,
    pub right: Contiguous2DUpgrade<Option<BorderStyleTimestampSchema>>,
    pub top: Contiguous2DUpgrade<Option<BorderStyleTimestampSchema>>,
    pub bottom: Contiguous2DUpgrade<Option<BorderStyleTimestampSchema>>,
}

impl BordersUpgrade {
    pub fn apply_borders(
        &mut self,
        x1: i64,
        y1: i64,
        x2: Option<i64>,
        y2: Option<i64>,
        borders: BorderStyleCellSchema,
    ) {
        let (x1, y1, x2, y2) = add_import_offset_to_contiguous_2d_rect(x1, y1, x2, y2);

        if let Some(left) = borders.left {
            self.left.set_rect(x1, y1, x2, y2, Some(left));
        }
        if let Some(right) = borders.right {
            self.right.set_rect(x1, y1, x2, y2, Some(right));
        }
        if let Some(top) = borders.top {
            self.top.set_rect(x1, y1, x2, y2, Some(top));
        }
        if let Some(bottom) = borders.bottom {
            self.bottom.set_rect(x1, y1, x2, y2, Some(bottom));
        }
    }

    pub fn upgrade_schema(self) -> BordersSchema {
        BordersSchema {
            left: self.left.upgrade_schema(),
            right: self.right.upgrade_schema(),
            top: self.top.upgrade_schema(),
            bottom: self.bottom.upgrade_schema(),
        }
    }
}
