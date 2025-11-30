# IImageButton.GroupIndex

IImageButton.GroupIndex
-


# IImageButton.GroupIndex


## Синтаксис


GroupIndex: Integer;


## Описание


Свойство GroupIndex определяет индекс группы, в которую входит компонент [ImageButton](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageButton.htm).


## Комментарии


Свойство GroupIndex предназначено для разделения кнопок на разные группы. Нажатие кнопки, входящей в группу, изменяет [состояние](IImageButton.Down.htm) всех остальных кнопок, входящих в эту же группу.


По умолчанию свойству GroupIndex установлено значение «0», при этом кнопка не принадлежит ни к какой группе.


Примечание. Кнопки, объединенные в группу, должны быть расположены в рамках одного родительского компонента.


См. также:


[IImageButton](IImageButton.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
