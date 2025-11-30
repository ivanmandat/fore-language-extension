# IEaxAnalyzer.CopyFrom

IEaxAnalyzer.CopyFrom
-


# IEaxAnalyzer.CopyFrom


## Синтаксис


CopyFrom(Source: [IEaxAnalyzer](IEaxAnalyzer.htm));


## Параметры


Source. Экспресс-отчет, данные
 которого необходимо скопировать в текущий отчет.


## Описание


Метод CopyFrom осуществляет
 копирование в текущий экспресс-отчет параметров отчета, передаваемого
 посредством параметра Source.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. У текущего пользователя присутствуют
 права только на чтение данного отчета.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObjectDescriptor;

	    Expr, Expr1: IEaxAnalyzer;

	    CrInfo: IMetabaseObjectCreateInfo;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT");

	    Expr := MObj.Open(Null) As IEaxAnalyzer;

	    //...

	    //изменение параметров экспресс-отчета

	    //...

	    CrInfo := MB.CreateCreateInfo;

	    CrInfo.ClassId := MetabaseObjectClass.KE_CLASS_EXPRESSREPORT;

	    CrInfo.Id := "Copy_"+ MObj.Id;

	    CrInfo.Parent := MObj.Parent;

	    Expr1 := MB.CreateObject(CrInfo).Edit As IEaxAnalyzer;

	    Expr1.CopyFrom(Expr);

	    (Expr1 As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера параметры измененного экспресс-отчета будут
 скопированы и сохранены вместе с новым экспресс-отчетом.


См. также:


[IEaxAnalyzer](IEaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
