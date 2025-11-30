# IRibbonCategory.SmallImages

IRibbonCategory.SmallImages
-


# IRibbonCategory.SmallImages


## Синтаксис


SmallImages: [IImageList](../IImageList/IImageList.htm);


## Описание


Свойство SmallImages определяет
 компонент, содержащий маленькие изображения, которые будут использоваться
 элементами управления данной вкладки на ленте инструментов.


## Комментарии


В качестве значения данного свойства необходимо указать компонент [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm)
 либо [GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm).


При настройке ленты с определенными элементами управления могут быть
 связаны какие-либо изображения. В рамках отдельной вкладки изображения
 хранятся в виде коллекции IMAGE_SMALL:


//...


<CATEGORY>


<ELEMENT_NAME>Category</ELEMENT_NAME>


<NAME>Главная</NAME>


<IMAGE_SMALL>


<NAME>IDR_BCGP_IMAGE_CATEGORY_SMALL_0</NAME>


</IMAGE_SMALL>


//...


<CATEGORY>


//...


Определенные элементы управления связаны с изображениями в коллекции
 по индексам:


//...


<ELEMENT>


<ELEMENT_NAME>Button</ELEMENT_NAME>


<ID>


<NAME>IDC_BUTTON1110</NAME>


<VALUE>1110</VALUE>


</ID>


<TEXT>Button</TEXT>


<INDEX_SMALL>0</INDEX_SMALL>


</ELEMENT>


//...


При загрузке XML-строки ленты среди [ресурсов](../IRibbon/IRibbon.Resources.htm)
 будет произведен поиск изображения, наименование которого совпадает с
 элементом <Name> тега <IMAGE_SMALL>. Данное изображение
 должно содержать горизонтальную ленту пиктограмм. При загрузке будет осуществлена
 разбивка на отдельные пиктограммы и полученные пиктограммы по индексам
 будут связаны с соответствующими элементами управления.


Если большие пиктограммы отсутствуют в ресурсах, то их можно установить
 используя данное свойство. Изображения из устанавливаемого компонента
 также будут загружены по индексам.


Примечание.
 При динамическом изменении коллекции изображений данного свойства автоматическое
 обновление изображений в элементах управления не производится. Для применения
 всех изменений необходимо повторно указать компонент в данном свойстве.


## Пример


Использование свойства приведено в примере для [IRibbonCategories.Add](../IRibbonCategories/IRibbonCategories.Add.htm).


См. также:


[IRibbonCategory](IRibbonCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
