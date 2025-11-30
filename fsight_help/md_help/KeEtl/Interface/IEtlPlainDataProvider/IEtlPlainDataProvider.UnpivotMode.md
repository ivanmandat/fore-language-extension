# IEtlPlainDataProvider.UnpivotMode

IEtlPlainDataProvider.UnpivotMode
-


# IEtlPlainDataProvider.UnpivotMode


## Синтаксис


UnpivotMode: Boolean;


## Описание


Свойство UnpivotMode определяет
 признак импорта данных в режиме кросс-таблицы.


## Комментарии


Кросс-таблица - это способ представления
 данных, при котором информация о различных показателях располагается в
 заголовках строк и столбцов, а на пересечении строк и столбцов располагаются
 фактические данные.


Допустимые значения:


	- True. Импорт данных
	 производится в режиме кросс-таблицы. Для определения параметров идентификации
	 данных в кросс-таблице и указания источника данных, в котором данные
	 представлены в кросс-режиме, используйте свойство [IEtlPlainDataProvider.UnpivotProvider](IEtlPlainDataProvider.UnpivotProvider.htm);


	- False. Импорт данных
	 производится из источника, указанного в свойстве [IEtlPlainDataProvider.Provider](IEtlPlainDataProvider.Provider.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL_Task». В файловой системе имеется файл Microsoft
 Excel с наименованием «Data.xlsx», данные в файле представлены в виде
 кросс-таблицы.


[![](../../opened.gif)![](../../closed.gif)Пример файла](javascript:TextPopup(this))


	![](UnpivotProvider.gif)


        Sub UserProc;

        Var

            MB: IMetabase;

            ETLTask: IEtlTask;

            ETLProvider: IEtlPlainDataProvider;

            UnpivotProvider: IDtUnpivotProvider;

            ExcelProviderEx: IDtExcelProviderEx;

            WxProvider: IWxRectangle;

            WxETLProvider: IWxETLObject;

        Begin

            MB := MetabaseClass.Active;

            ETLTask := MB.ItemById("ETL_Task").Edit As IEtlTask;


            //Создание нового источника

            ETLProvider := ETLTask.Create(EtlObjectType.PlainDataExcelProviderEx) As IEtlPlainDataProvider;

            ETLProvider := ETLProvider.Edit;


            //Режим кросс-таблицы

            ETLProvider.UnpivotMode := True;


            //Указание источника, из которого будет производиться импорт

            ExcelProviderEx := ETLProvider.Provider As IDtExcelProviderEx;

            ExcelProviderEx.File := "c:\data.xlsx";

            ExcelProviderEx.Sheet := "Sheet1";


            ExcelProviderEx.HasHeader := False;

            ExcelProviderEx.Format := "XLSX";


            //Настройка параметров кросс-таблицы

            UnpivotProvider := ETLProvider.UnpivotProvider;

            UnpivotProvider.DataBottom := 5;

            UnpivotProvider.DataWidth := 5;

            UnpivotProvider.DataRight := 11;


            UnpivotProvider.DataTop := 1;

            UnpivotProvider.HeadTop := 0;

            UnpivotProvider.HeadBottom := 0;

            UnpivotProvider.HeadColumn := -1;

            UnpivotProvider.LeftBegin := 0;

            UnpivotProvider.LeftEnd := 1;


            //Сохранение источника

            ETLProvider.FillDefault;

            ETLProvider.Save;


            //Создание визуального объекта

            WxProvider := EtlTask.Workspace.CreateRectangle;

            WxETLProvider := New WxETLObject.Create;


            WxETLProvider.ETLObject := EtlProvider;

            WxProvider.Style.TextPosition := WxTextPosition.Bottom;

            WxProvider.Style.PictureMarginTop := -10;

            WxProvider.PinPosition := New GxPointF.Create(50, 50);

            WxProvider.Extension := WxETLProvider As IWxShapeExtension;


            //Сохранение задачи

            (ETLTask As IMetabaseObject).Save;

        End Sub UserProc;


При выполнении примера в задаче ETL будет создан новый загрузчик данных
 из файла Microsoft Excel. Для объекта будут настроены параметры, необходимые
 для импорта данных в режиме кросс-таблицы.


См. также:


[IEtlPlainDataProvider](IEtlPlainDataProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
