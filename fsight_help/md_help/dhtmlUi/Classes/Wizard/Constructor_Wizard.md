# Конструктор Wizard

Конструктор Wizard
-


# Конструктор Wizard


## Синтаксис


PP.Ui.Wizard (settings);


## Параметры


settings. JSON-объект со значениями
 свойств экземпляра класса.


## Описание


Конструктор Wizard создает экземпляр
 класса [Wizard](Wizard.htm).


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard.htm)
 с наименованием «importDataWizard» (см. «[Пример
 создания компонента ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard_Example.htm)»). Создадим экземпляр класса
 [Wizard](Wizard.htm) с шагами мастера [ImportDataWizard](dhtmlMetabase.chm::/Components/Metabase/ImportDataWizard/ImportDataWizard.htm):


var wizard = new PP.Ui.Wizard(//создаем экземпляр класса PP.Ui.Wizard
{
    Steps: importDataWizard.getSteps() //добавляем шаги мастера importDataWizard
});
var but1 = new PP.Ui.Button(//кнопка для отображения мастера
{
    Content: "Показать мастер",
    ParentNode: document.getElementById("but1"),
    Click: function (sender, args)
    {
        wizard.show();
        wizard.setWidth(400);
        wizard.setHeight(200);
    }
});
wizard.CompleteButtonClicked.add(function (sender, args)//обработчик нажатия кнопки "Готово"
{
    if (wizard.getSteps()[4].getPendingState() == false) alert("Настройка на последнем шаге завершена")//если на 5 шаге (последнем) настройка завершена и доступна кнопка "Готово", при нажатии на эту кнопку появится соответ. сообщение
});

Примечание.
 Мастер «importDataWizard» не должен отображаться (убрать строку importDataWizard.show();).


После выполнения примера при нажатии на кнопку «Показать мастер», будет
 отображен созданный мастер с шагами мастера «importDataWizard». На 5 (последнем)
 шаге мастера будет доступна кнопка «Готово». При нажатии на эту кнопку
 на экран будет выведено сообщение «Настройка на последнем шаге завершена».


См. также:


[Wizard](Wizard.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
