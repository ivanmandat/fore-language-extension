# IRibbon.Resources

IRibbon.Resources
-


# IRibbon.Resources


## Синтаксис


Resources: [IResourceObject](ModIo.chm::/Interface/IResourceObject/IResourceObject.htm);


## Описание


Свойство Resources определяет
 объект репозитория - Ресурсы, изображения которого будут использоваться
 в элементах управления ленты.


## Комментарии


При настройке ленты с определенными элементами управления могут быть
 связаны какие-либо изображения. В структуре XML-строки данным изображениям
 соответствуют различные теги:


	- <IMAGE>


	- <IMAGE_SCENIC>


	- <IMAGE_SMALL>


	- <IMAGE_LARGE>


//...


<ELEMENT>


<ELEMENT_NAME>Button_Palette</ELEMENT_NAME>


<ID>


<NAME>IDC_BUTTON1069</NAME>


<VALUE>1069</VALUE>


</ID>


<INDEX_SMALL>0</INDEX_SMALL>


<DEFAULT_COMMAND>FALSE</DEFAULT_COMMAND>


<ICONS_IN_ROW>0</ICONS_IN_ROW>


<SIZE_ICON>16,
 16</SIZE_ICON>


<IMAGE>


<NAME>IDR_BCGP_IMAGE_PALETTE_0</NAME>


</IMAGE>


</ELEMENT>


//...


<CATEGORY>


<ELEMENT_NAME>Category</ELEMENT_NAME>


<NAME>Главная</NAME>


<IMAGE_SMALL>


<NAME>IDR_BCGP_IMAGE_CATEGORY_SMALL_0</NAME>


</IMAGE_SMALL>


<IMAGE_LARGE>


<NAME>IDR_BCGP_IMAGE_CATEGORY_LARGE_0</NAME>


</IMAGE_LARGE>


//...


</CATEGORY>


Для того чтобы изображения были доступны при использовании компонента
 Ribbon на пользовательских формах,
 необходимо выполнить следующее:


	- Создать в репозитории объект «[Ресурсы](UiNav.chm::/Multilanguage/Resources.htm)
	 » и указать его в качестве значения данного свойства.


	- В ресурсе создать изображение, идентификатор которого совпадает
	 с элементом <Name> тега
	 <Image*> из XML-строки
	 ленты.


При загрузке XML-строки ленты будет произведен поиск и найденные изображения
 будут отображены у соответствующих элементов управления.


## Пример


Пример использования данного свойства приведен в примере для метода
 [LoadFromXML](IRibbon.LoadFromXML.htm).


См. также:


[IRibbon](IRibbon.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
