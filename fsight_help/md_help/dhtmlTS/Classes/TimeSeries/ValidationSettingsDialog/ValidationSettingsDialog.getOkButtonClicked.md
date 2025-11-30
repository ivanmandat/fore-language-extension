# ValidationSettingsDialog.getOkButtonClicked

ValidationSettingsDialog.getOkButtonClicked
-


**


# ValidationSettingsDialog.getOkButtonClicked


## Синтаксис


getOkButtonClicked();


## Описание


Метод getOkButtonClicked** определяет, была ли нажата кнопка «OK» в диалоге для редактирования правила валидации данных в рабочей книге.


## Комментарии


Метод возвращает значение true, если кнопка «OK» в диалоге была нажата, в противном случае - значение false.


## Пример


Для выполнения примера необходимо наличие компонента [ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog.htm) с наименованием «validationSettingsDialog» (см. «[Пример создания компонента ValidationSettingsDialog](../../../Components/TimeSeries/ValidationSettingsDialog/ValidationSettingsDialog_Example.htm)»). Проверим, была ли нажата кнопка «OK» в данном диалоге:


// Определим, была ли нажата кнопка «OK»
var isOkButtonClicked = validationSettingsDialog.getOkButtonClicked();
if (isOkButtonClicked) {
    console.log("Была нажата кнопка OK.");
} else {
    console.log("Кнопка OK не была нажата.");
}

В результате выполнения примера в консоли браузера будет выведено следующее сообщение:


Кнопка OK не была нажата.


Теперь укажем наименование правила валидации и нажмём на кнопку «OK». При повторном выполнении приведённого выше примера будет выведено другое сообщение:


Была нажата кнопка OK.


См. также:


[ValidationSettingsDialog](ValidationSettingsDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
