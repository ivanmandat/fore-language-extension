# ParamView.getMetadataValue

ParamView.getMetadataValue
-


# ParamView.getMetadataValue


## Синтаксис


getMetadataValue ();


## Описание


Метод getMetadataValue возвращает метаданные элемента управления параметра отчета.


## Комментарии


Метод возвращает JSON-объект с полями:


-
dt -данные ;


-
value -моникер элемента управления параметра отчета.


## Пример


Для выполнения примера предполагается наличие на странице элемента управления параметром отчета с наименованием «param» (см. пример на странице события [ParamView.LinkedDimOpened](ParamView.LinkedDimOpened.htm)). Добавим кнопку, при нажатии на которую будет возвращен моникер элемента управления параметра отчета:


var but = new PP.Ui.Button({


   Content: "Метаданные",


   ParentNode: document.body,


   Click: function () {


      console.log(param.getMetadataValue().value)


   }


});


После выполнения примера на страницу будет добавлена кнопка «Метаданные», при нажатии на которую в консоль браузера будет выведен моникер элемента управления параметра отчета.


См. также:


[ParamView](ParamView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
