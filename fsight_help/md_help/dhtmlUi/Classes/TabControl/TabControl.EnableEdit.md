# TabControl.EnableEdit

TabControl.EnableEdit
-


# TabControl.EnableEdit


## Синтаксис


EnableEdit: Boolean;


## Описание


Свойство EnableEdit определяет
 признак возможности редактирования заголовков вкладок.


## Комментарии


Допустимые значения:


	- true. Редактировать
	 заголовки вкладок можно;


	- false. По умолчанию.
	 Редактировать заголовки вкладок нельзя.


Для перехода в режим редактирования дважды щёлкните по заголовку.


Для выхода из режима редактирования щёлкните по пространству вне редактируемого
 заголовка.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [TabControl](../../Components/TabControl/TabControl.htm)
 с наименованием «tabcontrol» (см. «[Пример
 создания компонента TabControl](../../Components/TabControl/Example_TabControl.htm)»). Включим возможность редактирования
 и добавим обработчики событий [TabEdited](TabControl.TabEdited.htm),
 [TabEditing](TabControl.TabEditing.htm)
 и [TabTextEdited](TabControl.TabTextEdited.htm):


tabcontrol.setEnableEdit(true)

tabcontrol.TabEdited.add(function
 ()

{

   tabcontrol.showContent()

})

tabcontrol.TabEditing.add(function
 ()

{

   tabcontrol.hideContent()

})

tabcontrol.TabTextEdited.add(function
 (sender, args)

{

   console.log("Индекс: " + args.TabIndex + ";
 Заголовок: " + args.Caption)

})


После выполнения примера будет доступно редактирование заголовков вкладки.
 Перейдите в режим редактирования. Пока заголовок находится в режиме редактирования,
 [содержимое](../Control/Control.Content.htm) вкладки будет
 скрыто. После выхода из режима редактирования откроется содержимое вкладки.
 Если выход из режима редактирования был осуществлен после изменения текста
 заголовка, то в консоль браузера будет выведен индекс вкладки и ее измененный
 заголовок.


См. также:


[TabControl](TabControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
