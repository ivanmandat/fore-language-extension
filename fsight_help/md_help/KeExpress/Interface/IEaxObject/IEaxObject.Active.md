# IEaxObject.Active

IEaxObject.Active
-


# IEaxObject.Active


## Синтаксис


Active: Boolean;


## Описание


Свойство Active определяет активный
 объект экспресс-отчета.


## Комментарии


Активный объект отображается в текущий момент в экспресс-отчете. Также
 активный объект будет отображен при открытии экспресс-отчета из навигатора
 объектов. Для установки активного объекта необходимо присвоить свойству
 Active значение True,
 при этом для всех остальных объектов в данном свойстве будет установлено
 значение False.


Для активного объекта в свойстве [IEaxObject.Visible](IEaxObject.Visible.htm)
 будет автоматически установлено значение True.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT.


Добавьте ссылки на системные сборки: Express, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Expr.Chart.Active := True;

	    MObj.Save;

	End Sub UserProc;


При выполнения примера в экспресс-отчете будет изменен активный объект.
 При открытии экспресс-отчета будет отображена диаграмма.


См. также:


[IEaxObject](IEaxObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
