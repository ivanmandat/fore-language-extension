# ILanerDatabaseColumn.Text

ILanerDatabaseColumn.Text
-


# ILanerDatabaseColumn.Text


## Синтаксис


Text: [LnDatabaseColumnText](../../Enums/LnDatabaseColumnText.htm);


## Описание


Свойство Text определяет текст,
 отображаемый в колонке.


## Комментарии


В колонке может отображаться наименование, либо путь к базе данных.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    LanerAttr: ILanerAttributeColumns;

	    LanerDbCol: ILanerDatabaseColumn;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    // Отображение дополнительного атрибута

	    LanerAttr := Laner.AttributeColumns;

	    LanerDbCol := LanerAttr.AddByType(LnColumnType.Database) As ILanerDatabaseColumn;

	    LanerDbCol.Text := LnDatabaseColumnText.Name;

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в рабочей книге будет отображена колонка с
 наименованием базы данных, содержащей ряд.


См. также:


[ILanerDatabaseColumn](ILanerDatabaseColumn.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
