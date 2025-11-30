# IRdsDictionary.EditElementCallbackFore

IRdsDictionary.EditElementCallbackFore
-


# IRdsDictionary.EditElementCallbackFore


## Синтаксис


EditElementCallbackFore:
 String;


## Описание


Свойство EditElementCallbackFore
 устанавливает метод для замены стандартного вида диалога «[Свойства
 элемента справочника](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Element_Card.htm)»
 на пользовательский в настольном приложении.


## Комментарии


Путь к методу указывается в следующем формате: <ID модуля>[.<Имя
 класса>].<Имя метода>.


При установке свойства проверяется наличие указанного метода и его сигнатура.


Для удаления установленного метода установите свойству EditElementCallbackFore
 пустое значение.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором RDS, модуль для замены вида диалога с идентификатором
 MODULE, js-функция AddOrEditElement и форма пользовательского вида диалога.
 Пример модуля и формы указан в статье «[Как
 создать пользовательский вид диалога «Свойства элемента справочника](UiNavObj.chm::/reference_book/FAQ/Create_custom_view.htm)».


Добавьте ссылки на системные сборки: Metabase, Rds.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Obj: IMetabaseObject;

	    Dict: IRdsDictionary;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем справочник НСИ

	    Obj := MB.ItemById("RDS").Edit;

	    Dict := Obj As IRdsDictionary;

	    // Устанавливаем модуль для замены стандартной карточки элемента

	    Dict.EditElementCallbackFore := "MODULE.AddOrEditElement";

	    // Устанавливаем JS-функцию для замены стандартной карточки элемента

	    Dict.EditElementCallbackJS := "AddOrEditElement";

	    // Сохраняем справочник

	    Obj.Save;

	End Sub UserProc;


В результате выполнения примера в справочнике НСИ на вкладке «Карточка» будут установлены JS-функция,
 модуль и функция.


См. также:


[IRdsDictionary](IRdsDictionary.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
