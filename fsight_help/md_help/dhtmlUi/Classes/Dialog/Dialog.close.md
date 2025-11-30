# Dialog.close

Dialog.close
-


# Dialog.close


## Синтаксис


close();


## Описание


Метод close закрывает диалог.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [FontDialog](../../Components/FontDialog/FontDialog.htm) с наименованием «fontdialog» (см. «[Пример создания компонента FontDialog](../../Components/FontDialog/FontDialog_example.htm)»). Добавим обработчик события MouseOver:


fontdialog.MouseOver.add(function (sender, args) { fontdialog.close() });


После выполнения примера при наведении курсора на область компонента диалог будет закрыт.


См. также:


[Dialog](Dialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
