# UiErAnalyzer

UiErAnalyzer
-


# UiErAnalyzer


Сборка: Express;


## Описание


Класс UiErAnalyzer реализует
 компонент среды разработки [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm),
 осуществляющий доступ к экспресс-отчетам и рабочим книгам баз данных временных
 рядов.


## Комментарии


Компонент [UiErAnalyzer](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiErAnalyzer.htm)
 может выступать в качестве источника данных для следующих визуальных компонентов:


	- [ChartBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ChartBox.htm);


	- [ErAnalyzerDimPanel](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ErAnalyzerDimPanel.htm);


	- [ErAnalyzerTitle](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/ErAnalyzerTitle.htm);


	- [LanerBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/LanerBox.htm);


	- [LanerResultsBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/LanerResultsBox.htm);


	- [MapBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/MapBox.htm);


	- [TabSheetBox](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/TabSheetBox.htm).


## Свойства, унаследованные от [IUiErAnalyzer](../../Interface/IUiErAnalyzer/IUiErAnalyzer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ErAnalyzer](../../Interface/IUiErAnalyzer/IUiErAnalyzer.ErAnalyzer.htm)


		 Свойство ErAnalyzer
		 определяет экспресс-отчет, реализуемый интерфейсом IEaxAnalyzer.


## Свойства, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)


		 Свойство Active определяет,
		 будет ли активным объект, являющийся источником данных для компонента.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)


		 Свойство Instance определяет
		 набор данных для объекта, являющегося источником данных для компонента.


		 ![](../../Property_Image.gif)
		 [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm)


		 Свойство Object определяет
		 описание объекта, являющегося источником данных для компонента.


		 ![](../../Property_Image.gif)
		 [ObjectClassId](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ObjectClassId.htm)


		 Свойство ObjectClassId
		 возвращает идентификатор класса объекта, являющегося источником
		 данных для компонента.


		 ![](../../Property_Image.gif)
		 [OperationMode](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.OperationMode.htm)


		 Свойство OperationMode
		 определяет режим подключения объекта.


## Свойства, унаследованные от [IComponent](ModForms.chm::/Interface/IComponent/IComponent.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ComponentCount](ModForms.chm::/Interface/IComponent/IComponent.ComponentCount.htm)


		 Свойство ComponentCount
		 возвращает количество дочерних компонентов.


		 ![](../../Property_Image.gif)
		 [Components](ModForms.chm::/Interface/IComponent/IComponent.Components.htm)


		 Свойство Components
		 возвращает дочерний компонент.


		 ![](../../Property_Image.gif)
		 [Data](ModForms.chm::/Interface/IComponent/IComponent.Data.htm)


		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)


		 Свойство Name определяет
		 наименование компонента.


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)


		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение данного свойства
		 и использовать его по своему усмотрению.


## Методы, унаследованные от [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)


		 Метод ClearDefault
		 устанавливает все параметры компонента по умолчанию.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterExecute](UiErAnalyzer.OnAfterExecute.htm)
		 Событие OnAfterExecute
		 наступает после вычисления экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeDataRefresh](UiErAnalyzer.OnBeforeDataRefresh.htm)
		 Событие OnBeforeDataRefresh
		 наступает перед обновлением источника данных экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecute](UiErAnalyzer.OnBeforeExecute.htm)
		 Событие OnBeforeExecute
		 наступает перед вычислением экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnLayoutChanged](UiErAnalyzer.OnLayoutChanged.htm)
		 Событие OnLayoutChanged
		 наступает при перемещении какого-либо справочника экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnSelectionChanged](UiErAnalyzer.OnSelectionChanged.htm)
		 Событие OnSelectionChanged
		 наступает при изменении отметки измерения источника данных для
		 экспресс-отчета.


См. также:


[Классы
 сборки Express](../KeExpress_Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
