# IMsExpressionEdit.AddStub

IMsExpressionEdit.AddStub
-


# IMsExpressionEdit.AddStub


## Синтаксис


		AddStub(Name: String; Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm));


## Параметры


Name. Наименование куба;


Stub. Добавляемый куб.


## Описание


Метод AddStub добавляет куб
 в качестве источника данных MsExpressionEdit.


## Комментарии


Для использования фактов куба в выражении:


	- Введите наименование куба, заданное параметром Name.


	- Поставьте знак «!».


	- Нажмите сочетание клавиш CTRL+ПРОБЕЛ. Будет отображен раскрывающийся
	 список, содержащий факты куба.


	- Выберите требуемый факт из списка.


Выбранный факт будет вставлен в выражение MsExpressionEdit.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, содержащей
 компонент MsExpressionEdit с идентификатором
 MSEXPRESSIONEDIT1. В репозитории предполагается наличие куба с идентификатором
 CUBE.


Добавьте ссылки на системные сборки: Cubes, Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    Stub: IVariableStub;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем куб

		    Stub := mb.ItemById("CUBE").Bind As IVariableStub;

		    // Подключаем куб в «MsExpressionEdit1»

		    MsExpressionEdit1.AddStub("Куб", Stub);

		    // Устанавливаем режим отображения операндов

		    MsExpressionEdit1.UseFullVariableNames := True;

		End Sub UserProc;


В результате выполнения примера в выражении MSEXPRESSIONEDIT1 будет
 доступно использование фактов куба CUBE, наименования операндов будут
 отображаться в полном виде.


См. также:


[IMsExpressionEdit](IMsExpressionEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
