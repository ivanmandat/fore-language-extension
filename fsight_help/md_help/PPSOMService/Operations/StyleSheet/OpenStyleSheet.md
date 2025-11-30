# OpenStyleSheet: Операция

OpenStyleSheet: Операция
-


**


# OpenStyleSheet


## Синтаксис


OpenStyleSheetResult OpenStyleSheet(OdId tObject,
 OpenStyleSheetArg tArg)


## Параметры


tObject. Моникёр
 объекта репозитория, являющегося таблицей стилей.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenStyleSheet открывает
 таблицу стилей.


## Комментарии


Для выполнения операции укажите в поле tObject
 моникёр объекта, являющегося таблицей стилей, а в поле tArg
 параметры открытия. Моникёр объекта может быть получен при выполнении
 операции [GetObjects](../Repository/GetObjects.htm). Если в
 параметрах определить поле tArg.metaGet,
 то при открытии таблицы стилей также будут загружены параметры стилей.


Результатом работы операции будет моникёр открытого экземпляра таблицы
 стилей и параметры стилей, если было определено поле tArg.metaGet.


Дальнейшая работа со стилями осуществляется с помощью операций GetStyleSheet,
 CopyStyleSheet. Для сохранения изменений используйте операции [SaveObject](../Repository/SaveObject.htm),
 [SaveObjectAs](../Repository/SaveObjectAs.htm).


## Пример


Ниже приведён пример открытия таблицы стилей. В запросе передаётся моникёр
 объекта репозитория, являющегося таблицей стилей. В ответе возвращается
 моникёр открытого экземпляра таблицы стилей.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenStyleSheet xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!52741</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <metaGet />
  </tArg>
  </OpenStyleSheet>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenStyleSheetResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <name>Таблица стилей</name>  <type>0</type>[![](../../minus.gif)](../../#)<items>
[![](../../minus.gif)](../../#)<it>
  <key>1</key>  <tag>TAB</tag>  <preview>iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHaSURBVGhD7ZXdcQMhDISvH1eQBtxFXITf8+oe3EfKSE8XwFrNInR/43NyIcrMNxmDkBYtcEP6G4OuGcb7V9AjYXDnhMGds8rg67sGPngbxpsTFxwP8cyfzFySmXn+SmNnMZrHgmMya/Dt4xFw+fTng+Mza7B3exkcgIb0pGPufH/E4pk/pfGyPh2aE68B8vzb9VvBK8Og9pRuzDefpEwa4/xToGfeGptX95b+83hmr0sl+fzJ0qQ131sRqOYlKoPIzMZgagLX28NgrWX0Nbl53upydE4BA8uFkJyogZowrro8Rt+e5LwJf3Ivg/lUa8wrDZbcroHp96sMrpCcVr+9xb9q8NITrTgCtYmyIfzfarBlleG2uUbfrMHp9zNPdMY7nLof2d8hbjBELX4PHIGVQbk5NmalwdyktQeu0W1qN7mtNvldtD15g5HTaj+EwRmvqcUIHnMEssGl0TZGGsdr9jK4xEmeMmZqLx2Aan8bDGb9yIl10M690BqmfsGpa/fv9cgidfxJ0DxZ3LyMI1ANhkCKacyXNZ7BlrnNZNCERXgPjjbdywaDNRZwDTOHT5Z7+Dn+Jwz+S+QmVI0C0kQ+UP+BMLhzujM4qAmDOycM7pwwuHPU4KBXhvEbt9SBEBJ0pVAAAAAASUVORK5CYII=</preview>  <name>Стиль для заголовков</name>  <id>I1</id>  </it>
  </items>
  </meta>
  </OpenStyleSheetResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenStyleSheet" :
  {
   "tObject" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!52741"
    },
   "tArg" :
    {
     "metaGet" : ""
    }
  }
}

### JSON-ответ:


{
 "OpenStyleSheetResult" :
  {
   "id" :
    {
     "id" : "CPDKLBGLHHOOFOAEEOBMIPONHEFJBEBEOLJEMAEIDCPLAAGC!M!S!SDJNKBJGLHHOOFOAENACKGIKGBKMHOKOEOJBIKCBEOKJJAPGE"
    },
   "meta" :
    {
     "name" : "Таблица стилей",
     "type" : "0",
     "items" :
      {
       "it" :
        {
         "key" : "1",
         "tag" : "TAB",
         "preview" : "iVBORw0KGgoAAAANSUhEUgAAAHgAAAAVCAYAAACNDipWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAHaSURBVGhD7ZXdcQMhDISvH1eQBtxFXITf8+oe3EfKSE8XwFrNInR\/43NyIcrMNxmDkBYtcEP6G4OuGcb7V9AjYXDnhMGds8rg67sGPngbxpsTFxwP8cyfzFySmXn+SmNnMZrHgmMya\/Dt4xFw+fTng+Mza7B3exkcgIb0pGPufH\/E4pk\/pfGyPh2aE68B8vzb9VvBK8Og9pRuzDefpEwa4\/xToGfeGptX95b+83hmr0sl+fzJ0qQ131sRqOYlKoPIzMZgagLX28NgrWX0Nbl53upydE4BA8uFkJyogZowrro8Rt+e5LwJf3Ivg\/lUa8wrDZbcroHp96sMrpCcVr+9xb9q8NITrTgCtYmyIfzfarBlleG2uUbfrMHp9zNPdMY7nLof2d8hbjBELX4PHIGVQbk5NmalwdyktQeu0W1qN7mtNvldtD15g5HTaj+EwRmvqcUIHnMEssGl0TZGGsdr9jK4xEmeMmZqLx2Aan8bDGb9yIl10M690BqmfsGpa\/fv9cgidfxJ0DxZ3LyMI1ANhkCKacyXNZ7BlrnNZNCERXgPjjbdywaDNRZwDTOHT5Z7+Dn+Jwz+S+QmVI0C0kQ+UP+BMLhzujM4qAmDOycM7pwwuHPU4KBXhvEbt9SBEBJ0pVAAAAAASUVORK5CYII=",
         "name" : "Стиль для заголовков",
         "id" : "I1"
        }
      }
    }
  }
}


public static OpenStyleSheetResult OpenStyleSheet(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tOpen = new OpenStyleSheet()
    {
        tArg = new OpenStyleSheetArg() { metaGet = new StyleSheetMdPattern()},
        tObject = new OdId { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    // Открытие таблицы стилей
    var result = somClient.OpenStyleSheet(tOpen);
    return result;
}


См. также:


[Работа
 с таблицей стилей](StyleSheet_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
