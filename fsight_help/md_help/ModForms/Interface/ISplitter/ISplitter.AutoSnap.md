# ISplitter.AutoSnap

ISplitter.AutoSnap
-


# ISplitter.AutoSnap


## Синтаксис


AutoSnap: Boolean;


## Описание


Свойство AutoSnap определяет, будет ли присутствовать возможность установить размер компонента, к которому привязан текущий компонент [Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm), меньше размера указанного в свойстве [MinSize](ISplitter.MinSize.htm).


## Комментарии


Если свойству установлено значение True, то при перемещении компонента [Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm), если размеры связанного с ним компонента достигли значения, установленного в свойстве [MinSize](ISplitter.MinSize.htm), то связанный компонент будет скрыт и компонент [Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm) будет припаркован к границе контейнера.


Если свойству установлено значение False, то минимальный размер связанного компонента будет ограничен значением свойства [MinSize](ISplitter.MinSize.htm) компонента [Splitter](UiDevEnv.chm::/02_Components_constructor_forms/01_Standart_Components/Splitter.htm).


См. также:


[ISplitter](ISplitter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
