# TabControl.EnableDelete

TabControl.EnableDelete
-


# TabControl.EnableDelete


## Синтаксис


EnableDelete: Boolean;


## Описание


Свойство EnableDelete определяет
 признак доступности удаления вкладок.


## Комментарии


Допустимое значение:


	- true. Удаление вкладок
	 доступно. В заголовке вкладок появляется кнопка ![](../../Components/SlidePanel/SlidePanel4.gif)
	 «Удалить»;


	- false. Удаление вкладок
	 недоступно.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TabControl](TabControl.htm)
 с наименованием «tabcontrol» (см. «[Пример
 создания компонента TabControl](../../Components/TabControl/Example_TabControl.htm)»). Включим возможность удаления и добавим
 обработчик события [TabControl.TabDeleted](TabControl.TabDeleted.htm):


tabcontrol.setEnableDelete(true);

tabcontrol.TabDeleted.add(function ()

    {

       confirm("Удалить вкладку?")

    })


После выполнения примера на вкладках появятся кнопки ![](../../Components/SlidePanel/SlidePanel4.gif)
 «Удалить», при нажатии на которые
 будет выдаваться диалог подтверждения с текстом «Удалить вкладку?».


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
