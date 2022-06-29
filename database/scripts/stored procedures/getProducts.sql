USE [BikeStores]
GO

/****** Object:  StoredProcedure [dbo].[getProducts]    Script Date: 6/29/2022 4:07:30 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Mustafa Mohamed
-- Create date: 29th June 2022
-- Description:	Get existing products (with pagination)
-- =============================================
CREATE PROCEDURE [dbo].[getProducts]
(
	@limit as INT,
	@page AS INT,
	@pageCount AS INT OUTPUT
)
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	DECLARE @count AS INT;

    SELECT 

	products.product_id as productId,
	products.list_price as listPrice,
	products.model_year as modelYear,
	products.product_name as productName,
	categories.category_name as categoryName,
	brands.brand_name as brandName

	FROM production.products products
	INNER JOIN production.categories categories ON products.category_id = categories.category_id
	INNER JOIN production.brands brands ON products.brand_id = brands.brand_id

	ORDER BY product_id

	OFFSET (@page * @limit) ROWS
	FETCH NEXT @limit ROWS ONLY;

	SELECT @count = COUNT(*) FROM production.products;

	SET @pageCount = @count / @limit; -- Need to do more research here!
END

GO

