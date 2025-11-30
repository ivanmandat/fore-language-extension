# BCList.findById

BCList.findById
-


# BCList.findById


## Синтаксис


findById (id);


## Параметры


id. Идентификатор элемента.


## Описание


Метод findById находит элемент
 из коллекции по его идентификатору.


## Комментарии


Идентификатор устанавливается при помощи свойства [Id](dhtmlCommon.chm::/Classes/object/object.id.htm).


## Пример


Для выполнения примера на html-странице в теге HEAD добавьте ссылки
 на библиотеку компонентов PP.js и визуальные стили PP.css. Создадим компонент
 [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm):


    var bread = new PP.Ui.Breadcrumb({


        ParentNode:
 document.getElementById("bc1"),


        Width:
 400,


        Items:


         [


            {
 Content: "Элемент1", Id: "el1" },


            {
 Content: "Элемент2", Id: "el2" },


            {
 Content: "Элемент3", Id: "el3" }


          ]


        });


    var a = bread.getItems().findById("el1");


    console.log(a.getContent());


После выполнения примера на html-странице будет размещен компонент [Breadcrumb](../../Components/Breadcrumb/Breadcrumb.htm),
 в состав которого входят три дочерних элемента. В консоль браузера будет
 выведено название элемента с идентификатором «el1» - «Элемент1».


См. также:


[BCList](BCList.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
