# UiErAnalyzer: Компонент

UiErAnalyzer: Компонент
-


# UiErAnalyzer


## Иерархия наследования


           [IComponent](modforms.chm::/Interface/IComponent/IComponent.htm)


           [IUiMetabaseObject](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.htm)


           [IUiErAnalyzer](KeExpress.chm::/Interface/IUiErAnalyzer/IUiErAnalyzer.htm)


           [UiErAnalyzer](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.htm)


## Описание


Компонент UiErAnalyzer является
 невизуальным и используется для предоставления доступа к экспресс-отчетам
 и рабочим книгам баз данных временных рядов.


## Работа с компонентом


После размещения компонента на форме для его использования выполните
 следующие действия:


	- В инспекторе объектов в свойстве [Object](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Object.htm) укажите
	 экспресс-отчет/рабочую книгу репозитория. Для этого в редакторе свойства
	 нажмите кнопку ![](../../Select_Button.gif) или в контекстном
	 меню для компонента выберите команду «Объект».
	 В открывшемся диалоге выберите необходимый объект;


	- Установите свойству [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm) значения
	 True.


После этого компонент может быть указан в качестве источника данных
 для следующих визуальных компонентов:


	- [ChartBox](ChartBox.htm);


	- [ErAnalyzerDimPanel](ErAnalyzerDimPanel.htm);


	- [ErAnalyzerTitle](ErAnalyzerTitle.htm);


	- [LanerBox](LanerBox.htm);


	- [LanerResultsBox](LanerResultsBox.htm);


	- [MapBox](MapBox.htm);


	- [TabSheetBox](TabSheetBox.htm);


	- [EaxDocumentViewerBox](EaxDocumentViewerBox.htm);


	- [WorkbookDocumentViewerBox](WorkbookDocumentViewerBox.htm).


В коде на Fore, используя свойство
 [ErAnalyzer](KeExpress.chm::/Interface/IUiErAnalyzer/IUiErAnalyzer.ErAnalyzer.htm), можно
 получить актуальные параметры объекта, с которым производится работа.
 Также, используя данное свойство, можно произвести необходимые изменения.


## Свойства компонента UiErAnalyzer


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Active](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Active.htm)
		 Свойство Active определяет
		 активность объекта, являющегося источником данных для компонента.


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
		 [ErAnalyzer](KeExpress.chm::/Interface/IUiErAnalyzer/IUiErAnalyzer.ErAnalyzer.htm)
		 Свойство ErAnalyzer
		 возвращает экспресс-отчет, реализуемый интерфейсом IEaxAnalyzer.


		 ![](../../Property_Image.gif)
		 [Instance](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.Instance.htm)
		 Свойство Instance определяет
		 набор данных для объекта, являющегося источником данных для компонента.


		 ![](../../Property_Image.gif)
		 [Name](ModForms.chm::/Interface/IComponent/IComponent.Name.htm)
		 Свойство Name определяет
		 наименование компонента.


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


		 ![](../../Property_Image.gif)
		 [Tag](ModForms.chm::/Interface/IComponent/IComponent.Tag.htm)
		 Свойство Tag не используется
		 компилятором. Пользователь может изменить значение свойства Tag и использовать его по своему
		 усмотрению.


## Методы компонента UiErAnalyzer


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ClearDefault](KeFore.chm::/Interface/IUiMetabaseObject/IUiMetabaseObject.ClearDefault.htm)
		 Метод ClearDefault
		 устанавливает все параметры компонента по умолчанию.


## События компонента UiErAnalyzer


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [OnAfterExecute](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.OnAfterExecute.htm)
		 Событие OnAfterExecute
		 наступает после вычисления экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeDataRefresh](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.OnBeforeDataRefresh.htm)
		 Событие OnBeforeDataRefresh
		 наступает перед обновлением источника данных экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnBeforeExecute](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.OnBeforeExecute.htm)
		 Событие OnBeforeExecute
		 наступает перед вычислением экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnLayoutChanged](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.OnLayoutChanged.htm)
		 Событие OnLayoutChanged
		 наступает при перемещении какого-либо справочника экспресс-отчета.


		 ![](../../Event_Image.gif)
		 [OnSelectionChanged](KeExpress.chm::/Class/UiErAnalyzer/UiErAnalyzer.OnSelectionChanged.htm)
		 Событие OnSelectionChanged
		 наступает при изменении отметки элементов справочника экспресс-отчета.


См. также:


[Компоненты доступа
 к данным](03_components_of_the_access_to_data.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
