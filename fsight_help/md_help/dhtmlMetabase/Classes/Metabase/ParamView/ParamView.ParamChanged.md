# ParamView.ParamChanged

ParamView.ParamChanged
-


# ParamView.ParamChanged


## Синтаксис


ParamChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ParamChanged наступает
 при изменении значения параметра.


## Пример


Для выполнения примера предполагается наличие на странице элемента управления
 для параметра экспресс-отчета с наименованием param» (см. «[Конструктор
 ParamView](Constructor_ParamView.htm)»). Добавим обработчик события ParamChanged
 и изменим значение параметра:


var
 inst = param.getInstance();//получаем базовый
 элемент управления для параметра (например, если параметр строковый, то
 [PP.Ui.TextBox](dhtmlUi.chm::/Classes/TextBox/TextBox.htm))


inst.setValue("Новое
 значение");


param.ParamChanged.add(function (sender, args)
 {


   console.log(args.NewText)//аргумент NewText актуален, если метод getInstance
 возвратил класс [PP.Ui.TextBox](dhtmlUi.chm::/Classes/TextBox/TextBox.htm)


});


После выполнения примера для параметра будет установлено новое значение,
 которое будет выведено в консоль браузера.


См. также:


[ParamView](ParamView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
