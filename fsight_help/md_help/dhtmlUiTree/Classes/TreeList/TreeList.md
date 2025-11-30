# TreeList

TreeList
-


# TreeList


Пространство имен: PP.Ui
 ;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


TreeList


## Описание


Класс TreeList реализует компонент
 [TreeList](../../Components/TreeList/TreeList.htm), предназначенный
 для отображения ветвящихся иерархических структур, таких как дерево наследования
 объектов.


## Синтаксис


PP.initClass(PP.Ui.TreeList, PP.Ui.[Control](dhtmlUi.chm::/Classes/control/control.htm),
 "TreeList");


## Конструктор


			 Имя конструктора
			 Краткое описание


			 ![](../../sub_image.gif)
			 [TreeList](dhtmlUiTree.chm::/classes/treelist/constructor_treelist.htm)
			 Конструктор TreeList
			 создает экземпляр компонента TreeList.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ActiveColor.htm)
		 Свойство ActiveColor
		 определяет цвет активной вершины дерева.


		 ![](../../Property_Image.gif)
		 [ActiveFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ActiveFont.htm)
		 Свойство ActiveFont
		 определяет параметры шрифта активной вершины дерева.


		 ![](../../Property_Image.gif)
		 [ActiveParentColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ActiveParentColor.htm)
		 Свойство ActiveParentColor
		 определяет цвет выделения родительских вершин активного элемента
		 дерева.


		 ![](../../Property_Image.gif)
		 [AreaSelect](dhtmlUiTree.chm::/Classes/TreeList/TreeList.AreaSelect.htm)
		 Свойство AreaSelect
		 определяет, доступно ли выделение области дерева мышью.


		 ![](../../Property_Image.gif)
		 [CaptionVisible](dhtmlUiTree.chm::/classes/treelist/treelist.captionvisible.htm)
		 Свойство CaptionVisible
		 определяет, отображается ли строка заголовков.


		 ![](../../Property_Image.gif)
		 [CheckBoxes](dhtmlUiTree.chm::/classes/treelist/treelist.checkboxes.htm)
		 Свойство CheckBoxes
		 определяет, отображаются ли [флажки](dhtmlUi.chm::/components/checkbox/checkbox.htm)
		 для вершин компонента.


		 ![](../../Property_Image.gif)
		 [ChildrenCount](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ChildrenCount.htm)
		 Свойство ChildrenCount
		 содержит количество вершин в корневой ветви.


		 ![](../../Property_Image.gif)
		 [Columns](dhtmlUiTree.chm::/classes/treelist/treelist.columns.htm)
		 Свойство Columns устанавливает
		 [коллекцию
		 столбцов](dhtmlUiTree.chm::/classes/treecolumns/treecolumns.htm) для компонента.


		 ![](../../Property_Image.gif)
		 [ContentColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ContentColor.htm)
		 Свойство ContentColor
		 определяет цвет фона содержимого вершины дерева.


		 ![](../../Property_Image.gif)
		 [ContentFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ContentFont.htm)
		 Свойство ContentFont
		 определяет параметры шрифта вершин дерева.


		 ![](../../Property_Image.gif)
		 [CutOverflow](dhtmlUiTree.chm::/Classes/TreeList/TreeList.CutOverflow.htm)
		 Свойство CutOverflow
		 определяет, нужно ли отображать многоточие на месте невмещающегося
		 текста.


		 ![](../../Property_Image.gif)
		 [DblClickExpand](dhtmlUiTree.chm::/Classes/TreeList/TreeList.DblClickExpand.htm)
		 Свойство DblClickExpand
		 определяет, раскрывается ли вершина дерева по двойному щелчку мыши.


		 ![](../../Property_Image.gif)
		 [DragAndDropDelay](dhtmlUiTree.chm::/Classes/TreeList/TreeList.DragAndDropDelay.htm)
		 Свойство DragAndDropDelay
		 определяет, сколько времени нужно продержать курсор над вершиной
		 с одновременным нажатием на кнопку мыши, чтобы активировался режим
		 Drag&Drop.


		 ![](../../Property_Image.gif)
		 [DragAndDropDetectDistance](dhtmlUiTree.chm::/Classes/TreeList/TreeList.DragAndDropDetectDistance.htm)
		 Свойство DragAndDropDetectDistance
		 определяет дистанцию, после которой включается режим Drag&Drop.


		 ![](../../Property_Image.gif)
		 [DragAndDropMode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.DragAndDropMode.htm)
		 Свойство DragAndDropMode
		 устанавливает режим работы Drag&Drop.


		 ![](../../Property_Image.gif)
		 [EmptySelection](dhtmlUiTree.chm::/classes/treelist/treelist.emptyselection.htm)
		 Свойство EmptySelection
		 определяет, можно ли снимать отметку со всех вершин дерева.


		 ![](../../Property_Image.gif)
		 [EnableColumnsMenu](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableColumnsMenu.htm)
		 Свойство EnableColumnsMenu
		 определяет видимость пиктограммы меню в заголовке дерева и возможность
		 вызова меню, управляющее видимостью колонок.


		 ![](../../Property_Image.gif)
		 [EnableDragAndDrop](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableDragAndDrop.htm)
		 Свойство EnableDragAndDrop
		 определяет, возможно ли перемещать вершины при помощи механизма
		 Drag&Drop.


		 ![](../../Property_Image.gif)
		 [EnableEdit](dhtmlUiTree.chm::/classes/treelist/treelist.enableedit.htm)
		 Свойство EnableEdit
		 определяет, возможно ли редактирование значений в ячейках таблицы.


		 ![](../../Property_Image.gif)
		 [EnableHighlight](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableHighlight.htm)
		 Свойство EnableHighlight
		 определяет, доступна ли подсветка элементов дерева.


		 ![](../../Property_Image.gif)
		 [EnableKeyNavigation](dhtmlUiTree.chm::/classes/treelist/treelist.enablekeynavigation.htm)
		 Свойство EnableKeyNavigation
		 определяет возможность перемещения по списку при помощи клавиатуры.


		 ![](../../Property_Image.gif)
		 [EnableResizeColumn](dhtmlUiTree.chm::/classes/treelist/treelist.enableresizecolumn.htm)
		 Свойство EnableResizeColumn
		 определяет, возможно ли изменять ширину столбцов.


		 ![](../../Property_Image.gif)
		 [EnableSearch](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableSearch.htm)
		 Свойство EnableSearch
		 определяет возможность поиска элементов дерева.


		 ![](../../Property_Image.gif)
		 [EnableSelectedHighlight](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableSelectedHighlight.htm)
		 Свойство EnableSelectedHighlight
		 определяет, возможна ли подсветка выделенных вершин дерева.


		 ![](../../Property_Image.gif)
		 [EnableSortColumns](dhtmlUiTree.chm::/Classes/TreeList/TreeList.EnableSortColumns.htm)
		 Свойство EnableSortColumns
		 определяет, возможна ли сортировка в столбцах.


		 ![](../../Property_Image.gif)
		 [FilterCaseSensitive](dhtmlUiTree.chm::/Classes/TreeList/TreeList.FilterCaseSensitive.htm)
		 Свойство FilterCaseSensitive
		 определяет, будет ли [фильтрация](dhtmlUiTree.chm::/Classes/TreeNodes/TreeNodes.filter.htm)
		 регистрозависимой.


		 ![](../../Property_Image.gif)
		 [FilterDeSelect](dhtmlUiTree.chm::/Classes/TreeList/TreeList.FilterDeSelect.htm)
		 Свойство FilterDeSelect
		 определяет сброс выделения вершин при фильтрации.


		 ![](../../Property_Image.gif)
		 [FirstShiftSelectClearing](dhtmlUiTree.chm::/Classes/TreeList/TreeList.FirstShiftSelectClearing.htm)
		 Свойство FirstShiftSelectClearing
		 устанавливает режим, при котором первое нажатие кнопки мыши по
		 вершине с зажатой кнопкой SHIFT снимает выделение со всех вершин,
		 кроме нажатой.


		 ![](../../Property_Image.gif)
		 [HighlightColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.HighlightColor.htm)
		 Свойство HighlightColor
		 определяет цвет подсветки элемента дерева.


		 ![](../../Property_Image.gif)
		 [HighlightFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.HighlightFont.htm)
		 Свойство HighlightFont
		 определяет шрифт подсвечиваемой вершины дерева.


		 ![](../../Property_Image.gif)
		 [HoverColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.HoverColor.htm)
		 Свойство HoverColor
		 определяет цвет вершины дерева, на которую наведен курсор мыши.


		 ![](../../Property_Image.gif)
		 [HoverFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.HoverFont.htm)
		 Свойство HoverFont
		 определяет параметры шрифта вершины дерева, на которую наведен
		 курсор.


		 ![](../../Property_Image.gif)
		 [IgnoreRightPadding](dhtmlUiTree.chm::/Classes/TreeList/TreeList.IgnoreRightPadding.htm)
		 Свойство IgnoreRightPadding
		 определяет игнорирование правого отступа.


		 ![](../../Property_Image.gif)
		 [ImageList](dhtmlUiTree.chm::/classes/treelist/treelist.imagelist.htm)
		 Свойство ImageList
		 устанавливает невизуальный компонент [ImageList](dhtmlUi.chm::/components/imagelist/imagelist.htm).


		 ![](../../Property_Image.gif)
		 [IsCSMultiSelect](dhtmlUiTree.chm::/Classes/TreeList/TreeList.IsCSMultiSelect.htm)
		 Свойство IsCSMultiSelect
		 определяет, включена ли возможность множественной отметки при
		 помощи клавиш SHIFT и CTRL.


		 ![](../../Property_Image.gif)
		 [KeepHasChild](dhtmlUiTree.chm::/Classes/TreeList/TreeList.KeepHasChild.htm)
		 Свойство KeepHasChild
		 определяет изменение отображения иерархического дерева и изменение
		 свойства HasChild у вершин во время работы режима Drag&Drop.


		 ![](../../Property_Image.gif)
		 [LoadingTimeout](dhtmlUiTree.chm::/Classes/TreeList/TreeList.LoadingTimeout.htm)
		 Свойство LoadingTimeout
		 определяет промежуток времени, через который произойдет загрузка
		 дерева.


		 ![](../../Property_Image.gif)
		 [MultiSelect](dhtmlUiTree.chm::/classes/treelist/treelist.multiselect.htm)
		 Свойство MultiSelect
		 определяет возможность множественной отметки элементов.


		 ![](../../Property_Image.gif)
		 [Nodes](dhtmlUiTree.chm::/classes/treelist/treelist.nodes.htm)
		 Свойство Nodes устанавливает
		 коллекцию вершин.


		 ![](../../Property_Image.gif)
		 [RightButtonSelect](dhtmlUiTree.chm::/Classes/TreeList/TreeList.RightButtonSelect.htm)
		 Свойство RightButtonSelect
		 определяет, возможен ли выбор вершины по щелчку правой кнопкой
		 мыши.


		 ![](../../Property_Image.gif)
		 [RowSelect](dhtmlUiTree.chm::/classes/treelist/treelist.rowselect.htm)
		 Свойство RowSelect
		 определяет, подсвечивается ли при выборе элемента вся строка.


		 ![](../../Property_Image.gif)
		 [SearchColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SearchColor.htm)
		 Свойство SearchColor
		 определяет цвет искомого текста.


		 ![](../../Property_Image.gif)
		 [SearchFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SearchFont.htm)
		 Свойство SearchFont
		 определяет параметры шрифта искомого текста.


		 ![](../../Property_Image.gif)
		 [SelectedHighlightColor](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SelectedHighlightColor.htm)
		 Свойство SelectedHighlightColor
		 определяет цвет подсветки выделенных вершин дерева.


		 ![](../../Property_Image.gif)
		 [SelectedHighlightFont](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SelectedHighlightFont.htm)
		 Свойство SelectedHighlightFont
		 определяет шрифт подсвеченной выделенной вершины дерева.


		 ![](../../Property_Image.gif)
		 [SelectEditorText](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SelectEditorText.htm)
		 Свойство SelectEditorText
		 определяет, будет ли выделяться редактируемый текст.


		 ![](../../Property_Image.gif)
		 [ShowColumns](dhtmlUiTree.chm::/classes/treelist/treelist.showcolumns.htm)
		 Свойство ShowColumns
		 определяет, отображаются ли столбцы.


		 ![](../../Property_Image.gif)
		 [ShowGridLines](dhtmlUiTree.chm::/classes/treelist/treelist.showgridlines.htm)
		 Свойство ShowGridLines
		 определяет, отображается ли сетка таблицы.


		 ![](../../Property_Image.gif)
		 [ShowLines](dhtmlUiTree.chm::/classes/treelist/treelist.showlines.htm)
		 Свойство ShowLines
		 определяет, будут ли отображаться линии, соединяющие вершину с
		 ее потомками.


		 ![](../../Property_Image.gif)
		 [ShowToolTips](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ShowToolTips.htm)
		 Свойство ShowToolTips
		 определяет отображение всплывающих подсказок при наведении курсора
		 мыши на вершину дерева.


		 ![](../../Property_Image.gif)
		 [SortSequence](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SortSequence.htm)
		 Свойство SortSequence
		 определяет порядок изменения сортировки.


		 ![](../../Property_Image.gif)
		 [UseCtrlSelect](dhtmlUiTree.chm::/classes/treelist/treelist.usectrlselect.htm)
		 Свойство UseCtrlSelect
		 определяет возможность выбора нескольких вершин при удержании
		 клавиши CTRL.


		 ![](../../Property_Image.gif)
		 [UseShiftSelect](dhtmlUiTree.chm::/classes/treelist/treelist.useshiftselect.htm)
		 Свойство UseShiftSelect
		 определяет возможность выбора нескольких последовательно
		 расположенных вершин при удержании клавиши SHIFT.


		 ![](../../Property_Image.gif)
		 [WordWrap](dhtmlUiTree.chm::/classes/treelist/treelist.wordwrap.htm)
		 Свойство WordWrap определяет,
		 осуществляется ли перенос текста вершины по словам.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [beginUpdate](dhtmlUiTree.chm::/Classes/TreeList/TreeList.beginUpdate.htm)
		 Метод beginUpdate отключает
		 перерисовку дерева, пока не будет вызван [endUpdate](dhtmlUiTree.chm::/Classes/TreeList/TreeList.endUpdate.htm).


		 ![](../../sub_image.gif)
		 [checkSelection](dhtmlUiTree.chm::/Classes/TreeList/TreeList.checkSelection.htm)
		 Метод checkSelection
		 снимает выделение со всех вершин кроме последней выбранной.


		 ![](../../sub_image.gif)
		 [clearSelection](dhtmlUiTree.chm::/Classes/TreeList/TreeList.clearSelection.htm)
		 Метод clearSelection
		 снимает выделение со всех элементов дерева.


		 ![](../../sub_image.gif)
		 [collapseAll](dhtmlUiTree.chm::/Classes/TreeList/TreeList.collapseAll.htm)
		 Метод collapseAll сворачивает
		 все вершины дерева.


		 ![](../../sub_image.gif)
		 [deleteNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.deleteNode.htm)
		 Метод deleteNode удаляет
		 вершину иерархического дерева.


		 ![](../../sub_image.gif)
		 [deSelectAll](dhtmlUiTree.chm::/classes/treelist/treelist.deselectall.htm)
		 Метод deSelectAll удаляет
		 отметку с выбранных элементов.


		 ![](../../sub_image.gif)
		 [deSelectLevel](dhtmlUiTree.chm::/classes/treelist/treelist.deselectlevel.htm)
		 Метод deSelectLevel
		 снимет отметку с элементов указанного уровня.


		 ![](../../sub_image.gif)
		 [endUpdate](dhtmlUiTree.chm::/Classes/TreeList/TreeList.endUpdate.htm)
		 Метод endUpdate обновляет
		 дерево и включает перерисовку.


		 ![](../../sub_image.gif)
		 [expandAll](dhtmlUiTree.chm::/Classes/TreeList/TreeList.expandAll.htm)
		 Метод expandAll разворачивает
		 все вершины дерева.


		 ![](../../sub_image.gif)
		 [expandToKeyNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.expandToKeyNode.htm)
		 Метод expandToKeyNode
		 ищет в дереве вершину с указанным ключом и раскрывает дерево на
		 уровне этой вершины.


		 ![](../../sub_image.gif)
		 [expandToNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.expandToNode.htm)
		 Метод expandToNode
		 раскрывает все вершины вплоть до указанной.


		 ![](../../sub_image.gif)
		 [filter](dhtmlUiTree.chm::/Classes/TreeList/TreeList.filter.htm)
		 Метод filter фильтрует
		 вершины в иерархическом дереве.


		 ![](../../sub_image.gif)
		 [find](dhtmlUiTree.chm::/Classes/TreeList/TreeList.find.htm)
		 Метод find осуществляет
		 поиск элемента дерева.


		 ![](../../sub_image.gif)
		 [findText](dhtmlUiTree.chm::/Classes/TreeList/TreeList.findText.htm)
		 Метод findText возвращает
		 вершину дерева, значение которой полностью совпадает с переданным
		 значением.


		 ![](../../sub_image.gif)
		 [getAllCollapsedKeys](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getAllCollapsedKeys.htm)
		 Метод getAllCollapsedKeys
		 возвращает массив ключей, принадлежащих всем закрытым вершинам
		 дерева и вершинам, не имеющим потомков.


		 ![](../../sub_image.gif)
		 [getAllExpandedKeys](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getAllExpandedKeys.htm)
		 Метод getAllExpandedKeys
		 возвращает массив ключей, принадлежащих всем раскрытым вершинам
		 дерева.


		 ![](../../sub_image.gif)
		 [getAllNodes](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getAllNodes.htm)
		 Метод getAllNodes возвращает
		 одномерный массив, содержащий все вершины дерева с текущим порядком
		 сортировки.


		 ![](../../sub_image.gif)
		 [getAllSelectedKeys](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getAllSelectedKeys.htm)
		 Метод getAllSelectedKeys
		 возвращает массив ключей, принадлежащих всем выделенным вершинам
		 дерева.


		 ![](../../sub_image.gif)
		 [getCaptionHeight](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getCaptionHeight.htm)
		 Метод getCaptionHeight
		 возвращает высоту заголовков столбцов.


		 ![](../../sub_image.gif)
		 [getFirstVisibleIndex](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getFirstVisibleIndex.htm)
		 Метод getFirstVisibleIndex
		 возвращает индекс первой видимой вершины в дереве.


		 ![](../../sub_image.gif)
		 [getFocusedNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getFocusedNode.htm)
		 Метод getFocusedNode
		 возвращает вершину в фокусе.


		 ![](../../sub_image.gif)
		 [getFullTreeHeight](dhtmlUiTree.chm::/classes/treelist/treelist.getfulltreeheight.htm)
		 Метод getFullTreeHeight
		 возвращает высоту дерева.


		 ![](../../sub_image.gif)
		 [getHasSecondLevel](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getHasSecondLevel.htm)
		 Метод getHasSecondLevel
		 определяет, имеет ли дерево дочерние вершины.


		 ![](../../sub_image.gif)
		 [getHorizontalScroll](dhtmlUiTree.chm::/classes/treelist/treelist.gethorizontalscroll.htm)
		 Метод getHorizontalScroll
		 возвращает горизонтальную полосу прокрутки.


		 ![](../../sub_image.gif)
		 [getLastFound](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getLastFound.htm)
		 Метод getLastFound
		 возвращает последнюю найденную вершину.


		 ![](../../sub_image.gif)
		 [getLastSearch](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getLastSearch.htm)
		 Метод getLastSearch
		 возвращает последнюю искомую строку.


		 ![](../../sub_image.gif)
		 [getMaximalWidthForColumn](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getMaximalWidthForColumn.htm)
		 Метод getMaximalWidthForColumn
		 возвращает максимальную ширину содержимого в колонке, в видимых
		 строках.


		 ![](../../sub_image.gif)
		 [getMaximalWidthForColumnFull](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getMaximalWidthForColumnFull.htm)
		 Метод getMaximalWidthForColumnFull
		 возвращает максимальную ширину содержимого в столбце, во всех
		 строках.


		 ![](../../sub_image.gif)
		 [getNodeByIndex](dhtmlUiTree.chm::/classes/treelist/treelist.getnodebyindex.htm)
		 Метод getNodeByIndex
		 возвращает вершину дерева по ее индексу.


		 ![](../../sub_image.gif)
		 [getNodeByKey](dhtmlUiTree.chm::/classes/treelist/treelist.getnodebykey.htm)
		 Метод getNodeByKey
		 возвращает вершину первого уровня по ее ключу.


		 ![](../../sub_image.gif)
		 [getNodeLevel](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getNodeLevel.htm)
		 Метод getNodeLevel
		 определяет уровень, на котором расположена указанная вершина.


		 ![](../../sub_image.gif)
		 [getNodes](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getNodes.htm)
		 Метод getNodes возвращает
		 объект класса PP.Ui.[TreeNodes](dhtmlUiTree.chm::/Classes/TreeNodes/TreeNodes.htm),
		 содержащий вершины иерархического дерева.


		 ![](../../sub_image.gif)
		 [getOptimalWidthForColumn](dhtmlUiTree.chm::/classes/treelist/treelist.getoptimalwidthforcolumn.htm)
		 Метод getOptimalWidthForColumn
		 возвращает оптимальную ширину столбца.


		 ![](../../sub_image.gif)
		 [getPixelHeight](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getPixelHeight.htm)
		 Метод getPixelHeight
		 возвращает значение высоты (в пикселях) компонента дерева.


		 ![](../../sub_image.gif)
		 [getPixelWidth](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getPixelWidth.htm)
		 Метод getPixelWidth
		 возвращает значение ширины (в пикселях) компонента дерева.


		 ![](../../sub_image.gif)
		 [getRootNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getRootNode.htm)
		 Метод getRootNode возвращает
		 объект, ассоциированный с корнем дерева.


		 ![](../../sub_image.gif)
		 [getSelectedNodes](dhtmlUiTree.chm::/classes/treelist/treelist.getselectednodes.htm)
		 Метод getSelectedNodes
		 возвращает выделенные вершины.


		 ![](../../sub_image.gif)
		 [getSelectedNodesCount](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSelectedNodesCount.htm)
		 Метод getSelectedNodesCount
		 возвращает число выделенных вершин в дереве


		 ![](../../sub_image.gif)
		 [getSort](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSort.htm)
		 Метод getSort возвращает
		 объект с параметрами сортировки.


		 ![](../../sub_image.gif)
		 [getSortColumn](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSortColumn.htm)
		 Метод getSortColumn
		 возвращает номер столбца, в котором производится сортировка.


		 ![](../../sub_image.gif)
		 [getSortMethod](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSortMethod.htm)
		 Метод getSortMethod
		 возвращает способ сортировки.


		 ![](../../sub_image.gif)
		 [getSortProperty](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSortProperty.htm)
		 Метод getSortProperty
		 возвращает название свойства вершины, по которому будет производиться
		 сортировка.


		 ![](../../sub_image.gif)
		 [getSortRecursive](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getSortRecursive.htm)
		 Метод getSortRecursive
		 определяет, производится ли сортировка в дочерних вершинах.


		 ![](../../sub_image.gif)
		 [getTopMargin](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getTopMargin.htm)
		 Метод getTopMargin
		 возвращает отступ верхней вершины.


		 ![](../../sub_image.gif)
		 [getTopShift](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getTopShift.htm)
		 Метод getTopShift возвращает
		 смещение верхней вершины.


		 ![](../../sub_image.gif)
		 [getVerticalScroll](dhtmlUiTree.chm::/classes/treelist/treelist.getverticalscroll.htm)
		 Метод getVerticalScroll
		 возвращает вертикальную полосу прокрутки.


		 ![](../../sub_image.gif)
		 [getVisibleNodes](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getVisibleNodes.htm)
		 Метод getVisibleNodes
		 возвращает одномерный массив, содержащий вершины дерева, отображаемые
		 в нем в настоящий момент.


		 ![](../../sub_image.gif)
		 [getVisibleNodesCount](dhtmlUiTree.chm::/Classes/TreeList/TreeList.getVisibleNodesCount.htm)
		 Метод getVisibleNodesCount
		 возвращает количество отображаемых в текущий момент вершин дерева.


		 ![](../../sub_image.gif)
		 [highlight](dhtmlUiTree.chm::/Classes/TreeList/TreeList.highlight.htm)
		 Метод highlight подсвечивает
		 указанный текст в подписях вершин дерева.


		 ![](../../sub_image.gif)
		 [isDraging](dhtmlUiTree.chm::/Classes/TreeList/TreeList.isDraging.htm)
		 Метод IsDraging определяет
		 признак режима перетаскивания.


		 ![](../../sub_image.gif)
		 [isEditing](dhtmlUiTree.chm::/Classes/TreeList/TreeList.isEditing.htm)
		 Метод IsEditing определяет
		 признак режима редактирования.


		 ![](../../sub_image.gif)
		 [isSelecting](dhtmlUiTree.chm::/Classes/TreeList/TreeList.isSelecting.htm)
		 Метод IsSelecting определяет
		 признак режима выделения.


		 ![](../../sub_image.gif)
		 [redraw](dhtmlUiTree.chm::/Classes/TreeList/TreeList.redraw.htm)
		 Метод redraw полностью
		 перерисовывает иерархическое дерево.


		 ![](../../sub_image.gif)
		 [removeFocus](dhtmlUiTree.chm::/Classes/TreeList/TreeList.removeFocus.htm)
		 Метод removeFocus снимает
		 фокус с вершины.


		 ![](../../sub_image.gif)
		 [removeHover](dhtmlUiTree.chm::/Classes/TreeList/TreeList.removeHover.htm)
		 Метод removeHover снимает
		 эффекты с вершины, появляющиеся при наведении курсора мыши на
		 нее.


		 ![](../../sub_image.gif)
		 [scrollToNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.scrollToNode.htm)
		 Метод scrollToNode
		 осуществляет прокрутку дерева до указанной вершины.


		 ![](../../sub_image.gif)
		 [selectAll](dhtmlUiTree.chm::/classes/treelist/treelist.selectall.htm)
		 Метод selectAll выделяет
		 все вершины дерева.


		 ![](../../sub_image.gif)
		 [selectLevel](dhtmlUiTree.chm::/classes/treelist/treelist.selectlevel.htm)
		 Метод selectLevel выбирает
		 все вершины указанного уровня.


		 ![](../../sub_image.gif)
		 [setExpandedByKeys](dhtmlUiTree.chm::/Classes/TreeList/TreeList.setExpandedByKeys.htm)
		 Метод setExpandedByKeys
		 раскрывает вершины по ключам, указанным в массиве keys.


		 ![](../../sub_image.gif)
		 [setExpandedForNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.setExpandedForNode.htm)
		 Метод setExpandedForNode
		 открывает или скрывает вершину, в зависимости от переданного значения.


		 ![](../../sub_image.gif)
		 [setHoveredNode](dhtmlUiTree.chm::/Classes/TreeList/TreeList.setHoveredNode.htm)
		 Метод setHoveredNode
		 устанавливает вершину, которая будет отображаться как при наведении
		 на нее курсора.


		 ![](../../sub_image.gif)
		 [setSelectedByKeys](dhtmlUiTree.chm::/Classes/TreeList/TreeList.setSelectedByKeys.htm)
		 Метод setSelectedByKeys
		 устанавливает отметку для всех вершин дерева с указанными ключами.


		 ![](../../sub_image.gif)
		 [showSearch](dhtmlUiTree.chm::/Classes/TreeList/TreeList.showSearch.htm)
		 Метод showSearch открывает
		 строку поиска.


		 ![](../../sub_image.gif)
		 [sort](dhtmlUiTree.chm::/Classes/TreeList/TreeList.Sort.htm)
		 Метод sort осуществляет
		 сортировку элементов дерева по столбцу.


		 ![](../../sub_image.gif)
		 [startEditing](dhtmlUiTree.chm::/Classes/TreeList/TreeList.startEditing.htm)
		 Метод startEditing
		 активирует режим редактирования указанной вершины.


		 ![](../../sub_image.gif)
		 [update](dhtmlUiTree.chm::/Classes/TreeList/TreeList.update.htm)
		 Метод update обновляет
		 отображение дерева.


## События


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [BeforeCollapse](dhtmlUiTree.chm::/classes/treelist/treelist.beforecollapse.htm)
		 Событие BeforeCollapse
		 наступает перед сворачиванием вершины дерева.


		 ![](../../Event_Image.gif)
		 [BeforeExpand](dhtmlUiTree.chm::/classes/treelist/treelist.beforeexpand.htm)
		 Событие BeforeExpand
		 наступает перед разворачиванием вершины дерева.


		 ![](../../Event_Image.gif)
		 [CheckBoxClick](dhtmlUiTree.chm::/classes/treelist/treelist.checkboxclick.htm)
		 Событие CheckBoxClick
		 наступает при нажатии на [флажок](dhtmlUi.chm::/components/checkbox/checkbox.htm).


		 ![](../../Event_Image.gif)
		 [CheckedChanged](dhtmlUiTree.chm::/classes/treelist/treelist.checkedchanged.htm)
		 Событие CheckedChanged
		 наступает при смене состояния [флажка](dhtmlUi.chm::/components/checkbox/checkbox.htm).


		 ![](../../Event_Image.gif)
		 [Collapse](dhtmlUiTree.chm::/classes/treelist/treelist.collapse.htm)
		 Событие Collapse наступает
		 при сворачивании вершин дерева.


		 ![](../../Event_Image.gif)
		 [ColumnVisibilityChanged](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ColumnVisibilityChanged.htm)
		 Событие ColumnVisibilityChanged
		 наступает после изменения видимости столбца дерева.


		 ![](../../Event_Image.gif)
		 [ColumnVisibilityChanging](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ColumnVisibilityChanging.htm)
		 Событие ColumnVisibilityChanging
		 наступает при изменении видимости столбца дерева.


		 ![](../../Event_Image.gif)
		 [Expand](dhtmlUiTree.chm::/classes/treelist/treelist.expand.htm)
		 Событие Expand наступает
		 при разворачивании вершин.


		 ![](../../Event_Image.gif)
		 [FilterChanged](dhtmlUiTree.chm::/Classes/TreeList/TreeList.FilterChanged.htm)
		 Событие FilterChanged
		 наступает после фильтрации вершин иерархического дерева.


		 ![](../../Event_Image.gif)
		 [Finding](dhtmlUiTree.chm::/Classes/TreeList/TreeList.Finding.htm)
		 Событие Find наступает
		 в начале поиска элемента.


		 ![](../../Event_Image.gif)
		 [Found](dhtmlUiTree.chm::/Classes/TreeList/TreeList.Found.htm)
		 Событие Found наступает,
		 когда найден элемент дерева.


		 ![](../../Event_Image.gif)
		 [LoadSubNodesOf](dhtmlUiTree.chm::/Classes/TreeList/TreeList.LoadSubNodesOf.htm)
		 Событие LoadSubNodesOf
		 наступает при загрузке вершины в дерево.


		 ![](../../Event_Image.gif)
		 [MouseDownNode](dhtmlUiTree.chm::/classes/treelist/treelist.mousedownnode.htm)
		 Событие MouseDownNode наступает
		 при нажатии и удержании ккнопки мыши у вершины компонента.


		 ![](../../Event_Image.gif)
		 [NodeClick](dhtmlUiTree.chm::/classes/treelist/treelist.nodeclick.htm)
		 Событие NodeClick наступает
		 при щелчке мыши по элементу списка.


		 ![](../../Event_Image.gif)
		 [NodeDblClick](dhtmlUiTree.chm::/classes/treelist/treelist.nodedblclick.htm)
		 Событие NodeDblClick наступает
		 при двойном щелчке мыши по элементу списка.


		 ![](../../Event_Image.gif)
		 [NodeDrag](dhtmlUiTree.chm::/classes/treelist/treelist.nodedrag.htm)
		 Событие NodeDrag наступает
		 во время перетаскивания вершины.


		 ![](../../Event_Image.gif)
		 [NodeDragEnd](dhtmlUiTree.chm::/classes/treelist/treelist.nodedragend.htm)
		 Событие NodeDragEnd
		 наступает при окончании перетаскивания вершины.


		 ![](../../Event_Image.gif)
		 [NodeDragFinished](dhtmlUiTree.chm::/Classes/TreeList/TreeList.NodeDragFinished.htm)
		 Событие NodeDragFinished
		 наступает после помещения вершины в новую позицию.


		 ![](../../Event_Image.gif)
		 [NodeDragStart](dhtmlUiTree.chm::/classes/treelist/treelist.nodedragstart.htm)
		 Событие NodeDragStart
		 наступает в начале перетаскивания вершины (в момент нажатия и
		 удержания кнопки мыши).


		 ![](../../Event_Image.gif)
		 [NodeEditCanceled](dhtmlUiTree.chm::/classes/treelist/treelist.nodeeditcanceled.htm)
		 Событие NodeEditCanceled
		 наступает при отмене редактирования.


		 ![](../../Event_Image.gif)
		 [NodeEdited](dhtmlUiTree.chm::/classes/treelist/treelist.nodeedited.htm)
		 Событие NodeEdited
		 наступает после редактирования названия вершины.


		 ![](../../Event_Image.gif)
		 [NodeEditFinish](dhtmlUiTree.chm::/Classes/TreeList/TreeList.NodeEditFinish.htm)
		 Событие NodeEditFinish
		 наступает после завершения редактирования вершины иерархического
		 дерева.


		 ![](../../Event_Image.gif)
		 [NodeEditing](dhtmlUiTree.chm::/classes/treelist/treelist.nodeediting.htm)
		 Событие NodeEditing
		 наступает во время редактирования значения в ячейке таблицы.


		 ![](../../Event_Image.gif)
		 [NodeHovered](dhtmlUiTree.chm::/Classes/TreeList/TreeList.NodeHovered.htm)
		 Событие NodeHovered
		 наступает при наведении курсора на вершину.


		 ![](../../Event_Image.gif)
		 [NodeUnHovered](dhtmlUiTree.chm::/Classes/TreeList/TreeList.NodeUnHovered.htm)
		 Событие NodeUnHovered
		 наступает, когда с вершины снимается признак того, что на нее
		 наведен курсор.


		 ![](../../Event_Image.gif)
		 [SelectionChanged](dhtmlUiTree.chm::/classes/treelist/treelist.selectionchanged.htm)
		 Событие SelectionChanged наступает
		 после выбора элемента.


		 ![](../../Event_Image.gif)
		 [SelectionChanging](dhtmlUiTree.chm::/classes/treelist/treelist.selectionchanging.htm)
		 Событие SelectionChanging
		 наступает во время выбора элемента.


		 ![](../../Event_Image.gif)
		 [Sort](dhtmlUiTree.chm::/classes/treelist/treelist.sort.htm)
		 Событие Sort наступает
		 во время сортировки коллекции вершин компонента.


		 ![](../../Event_Image.gif)
		 [SortChanged](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SortChanged.htm)
		 Событие SortChanged наступает
		 после завершения изменения сортировки столбца иерархического дерева.


		 ![](../../Event_Image.gif)
		 [SortChanging](dhtmlUiTree.chm::/Classes/TreeList/TreeList.SortChanging.htm)
		 Событие SortChanging наступает
		 во время изменения сортировки столбца иерархического дерева.


		 ![](../../Event_Image.gif)
		 [ToolTipShowing](dhtmlUiTree.chm::/Classes/TreeList/TreeList.ToolTipShowing.htm)
		 Событие ToolTipShowing
		 наступает, когда курсор мыши наведен на вершину иерархического
		 дерева.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../Property_Image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../Property_Image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../Property_Image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../Property_Image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../Property_Image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../Property_Image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../Property_Image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../Property_Image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../Property_Image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../Property_Image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../Property_Image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../Property_Image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../Property_Image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../Property_Image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../Property_Image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../Property_Image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../sub_image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../sub_image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../sub_image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../sub_image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../sub_image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../sub_image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../sub_image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../sub_image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../sub_image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../sub_image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../sub_image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../sub_image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../sub_image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../sub_image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../sub_image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../sub_image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../sub_image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../sub_image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../sub_image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../sub_image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../sub_image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../sub_image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../sub_image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../sub_image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../sub_image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../Event_Image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../Event_Image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../Event_Image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Ui](dhtmlUi.chm::/Classes/classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
