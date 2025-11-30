# NavigatorBox.moveObjects

NavigatorBox.moveObjects
-


# NavigatorBox.moveObjects


## Синтаксис


moveObjects(objects, parentKey, callback);


## Параметры


objects. Объекты,
 которые необходимо переместить;


parentKey. Ключ папки, в которую
 будут перенесены объекты;


callback. Функция обратного
 вызова.


## Описание


Метод moveObjects переносит
 объекты из одной папки в другую.


## Пример


Для выполнения примера предполагается наличие на html-странице компонента
 [NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox.htm)
 с наименованием «navbox» (см. «[Пример
 создания компонента NavigatorBox](../../../Components/Metabase/NavigatorBox/NavigatorBox_Example.htm)»). В теге BODY добавьте элемент DIV
 c идентификатором «div2». Добавим кнопку с наименованием «but1», при нажатии
 на которую выделенный в списке объект будет перемещен в папку с ключом
 0 (корневую папку репозитория). При этом в консоль браузера будет выведено
 сообщение «Объект перемещен»:


            var but1 = new PP.Ui.Button(
            {
               ParentNode: document.getElementById("div2"),
               Content: "Переместить",
               Click: function ()
               {
                  navbox.moveObjects(navbox.getSelectedObjects(), 0)
               }
            });
             navbox.PasteBufferStateChanged.add(function (sender, args)
            {
               console.log("Объект перемещен")
            });

После выполнения примера при нажатии на кнопку «Переместить» выделенный
 в списке объект будет перенесен в корневую папку репозитория. При этом
 в консоли браузера появится сообщение «Объект перемещен».


См. также:


[NavigatorBox](NavigatorBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
