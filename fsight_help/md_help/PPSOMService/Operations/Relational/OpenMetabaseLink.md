# OpenMetabaseLink: Операция

OpenMetabaseLink: Операция
-


**


# OpenMetabaseLink


## Синтаксис


MetabaseLinkResult OpenMetabaseLink(OdId tOb, OpenMetabaseLinkArg
 tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося связью с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenMetabaseLink открывает
 связь с репозиторием и возвращает контекст для работы с ней.


## Комментарии


Операция позволяет получить доступ к настройкам связи с репозиторием.
 Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося связью с репозиторием, а в поле
 tArg параметры открытия. Параметры
 для извлечения метаданных указываются в поле tArg.metaGet.
 Результатом работы операции будет моникёр открытого экземпляра связи с
 репозиторием, а также запрошенные метаданные, если при выполнении операции
 был задан соответствующий шаблон. Дальнейшая работа с открытым экземпляром
 связи с репозиторием осуществляется с помощью операций [GetMetabaseLink](GetMetabaseLink.htm)
 и [SetMetabaseLink](SetMetabaseLink.htm).
 Для закрытия открытого экземпляра связи с репозиторием используйте операцию
 [CloseMetabaseLink](CloseMetabaseLink.htm).


## Пример


Пример открытия связи с репозиторием на редактирование. В запросе передается
 моникёр связи в репозитории. В ответе приходит моникёр открытого экземпляра
 связи с репозиторием.


В примере для C# используется функция FindObjectById,
 код которой приведён в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenMetabaseLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!174241</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
  </tArg>
  </OpenMetabaseLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenMetabaseLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </id>
  </OpenMetabaseLinkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMetabaseLink" :
  {
   "tOb" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!174241"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenMetabaseLinkResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI"
    }
  }
}


public static MetabaseLinkResult OpenMetabaseLink(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenMetabaseLink()
    {
        tArg = new OpenMetabaseLinkArg()
        {
            args = new MetabaseLinkOpenArgs()
            {
                openForEdit = true
            }
        },
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, id).k }
    };
    //Открытие связи с репозиторием
    var tResult = somClient.OpenMetabaseLink(tOpen);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
