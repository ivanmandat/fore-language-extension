# Конструктор SchemaDialog

Конструктор SchemaDialog
-


# Конструктор SchemaDialog


## Синтаксис


PP.Rds.Ui.SchemaDialog(settings: Object);


## Параметры


settings. Настройки класса.


## Описание


Конструктор SchemaDialog создаёт
 диалог для выбора схемы экспорта/импорта.


## Пример


Для выполнения примера необходимо наличие на странице компонента [DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox.htm)
 с наименованием «dictionaryBox» (см. «[Пример
 создания компонента DictionaryBox](../../../Components/Rds/DictionaryBox/DictionaryBox_Example.htm)» ). Создадим диалог для выбора схемы
 импорта:


// Создадим диалог для выбора схемы импорта
var schemaDialog = new PP.Rds.Ui.SchemaDialog({
    Source: dictionaryBox.getSource()[0],
    IsImport: true, // Диалог для схем импорта
    Canceled: function (sender, args) {
        // Уничтожим данный диалог
        sender.dispose();
    },
    Confirmed: function (sender, args) {
        // Выведем идентификатор выбранной схемы импорта
        alert("Идентификатор схемы импорта: " + args.Schema.k);
        // Удалим данный диалог
        sender.dispose();
    }
});
// Отобразим данный диалог
schemaDialog.showDialog();
В результате выполнения примера был создан диалог для выбора схемы экспорта/импорта:


![](schemaDialog.png)


При нажатии на кнопку «Ок» будет вызвано событие [Confirmed](SchemaDialog.Confirmed.htm),
 в консоль будет выведен идентификатор выбранной схемы импорта.


При нажатии на кнопку «Отмена» будет вызвано событие [Canceled](SchemaDialog.Canceled.htm)
 и диалог будет закрыт.


См. также:


[SchemaDialog](SchemaDialog.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
