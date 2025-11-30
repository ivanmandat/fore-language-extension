# IAdoMdCube.SqlText

IAdoMdCube.SqlText
-


# IAdoMdCube.SqlText


## Синтаксис


SqlText: String;


## Описание


Свойство SqlText определяет
 текст MDX-запроса, на котором построен куб.


## Комментарии


Для определения физического имени, которое имеет исходный куб на
 сервере, используйте свойство [IAdoMdCube.NativeName](IAdoMdCube.NativeName.htm).


Имеется ряд ограничений, накладываемых на текст указываемого MDX-запроса:


	- Ключевое слово NON EMPTY нельзя использовать в предложении оси,
	 вместо него следует использовать функцию [NonEmpty](https://msdn.microsoft.com/ru-ru/library/ms145988.aspx).
	 Функция недоступна при работе с базой данных на базе SAP NetWeaver
	 BW;


	- Условие HAVING нельзя использовать в предложении оси, вместо
	 него следует использовать функцию [Filter](https://msdn.microsoft.com/ru-ru/library/ms146037.aspx);


	- По умолчанию в подзапросах выборки запрещены вычисляемые элементы.
	 Это ограничение можно изменить путем присвоения значения «1» параметру
	 SubQueries в свойстве [IAdoMdCatalog.ProviderString](../IAdoMdCatalog/IAdoMdCatalog.ProviderString.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории каталога
 ADOMD с идентификатором «ADOMDTest». В этом каталоге создан куб ADOMD
 с идентификатором «CUBE». Добавьте ссылки на системные сборки «AdoMd»,
 «Metabase».


			Sub UserProc;

Var

    MB: IMetabase;

    Cube: IAdoMdCube;

    SQL: String;

Begin

    MB := MetabaseClass.Active;

    Cube := MB.ItemByIdNamespace("CUBE", MB.GetObjectKeyById("ADOMDTest")).Edit As IAdoMdCube;

    //Получение MDX-запроса, на котором построен куб

    SQL := Cube.SqlText;

    //Изменение запроса

    SQL := String.Replace(SQL, "Year", "Month");

    //Обновление куба

    Cube.SqlText := SQL;

    (Cube As IMetabaseObject).Save;

End Sub UserProc;


При выполнении примера будет обновлена структура куба ADOMD путем изменения
 MDX-запроса, на котором построен этот куб.


См. также:


[IAdoMdCube](IAdoMdCube.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
