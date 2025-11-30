# ILaner.SaveChangedSeries

ILaner.SaveChangedSeries
-


# ILaner.SaveChangedSeries


## Синтаксис


SaveChangedSeries([SaveOptions: [LnSaveOptions](../../Enums/LnSaveOptions.htm)
 = 255]): [IRubricatorRevision](KeCubes.chm::/Interface/IRubricatorRevision/IRubricatorRevision.htm);


## Параметры


SaveOptions. Параметр, определяющий,
 какие изменения требуется сохранять.


## Описание


Метод SaveChangedSeries осуществляет
 сохранение данных рядов рабочей области и возвращает ревизию, в которую
 вошли сделанные изменения. По умолчанию сохраняются все изменения, произведенные
 в таблице данных.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 Memo, TabSheetBox, UiErAnalyzer с идентификаторами Button1, Memo1, TabSheetBox1
 и UiErAnalyzer1 соответственно. UiErAnalyzer1 является источником данных
 для TabSheetBox1. В UiErAnalyzer1 должна быть загружена рабочая область
 базы данных временных рядов. Компонент TabSheetBox должен находится в
 режиме редактирования данных в ячейках.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Collections, Cubes, Express, ExtCtrls,
 Forms, Laner, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    crRev: IRubricatorRevision;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    crRev := Laner.SaveChangedSeries;

	    Memo1.Lines.Add("Ревизия - " + crRev.Name);

	End Sub Button1OnClick;


После выполнения примера измененные данные будут сохранены, а в компонент
 «Memo1» будет выведена информация о наименовании ревизии, в которую вошли
 сделанные изменения.


См. также:


[ILaner](ILaner.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
