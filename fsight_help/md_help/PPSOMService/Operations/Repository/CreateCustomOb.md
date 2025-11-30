# CreateCustomOb: Операция

CreateCustomOb: Операция
-


**


# CreateCustomOb


## Синтаксис


CreateCustomObResult CreateCustomOb(OdId tParent,
 CreateCustomObArg tArg)


## Параметры


tParent. Моникёр
 родительского объекта, в котором создаётся объект пользовательского класса.


tArg. Параметры выполнения
 операции.


## Описание


Операция CreateCustomOb создаёт
 объект пользовательского класса.


## Комментарии


Для выполнения операции укажите в поле tParent
 моникёр объекта-родителя, а в поле tArg.classId
 идентификатор класса создаваемого объекта. Идентификатор класса доступен
 в метаданных пользовательского класса, которые можно получить с помощью
 операций [OpenCustomExtender](OpenCustomExtender.htm), [GetCustomExtender](GetCustomExtender.htm).


Результатом работы операции будет моникёр и описание созданного объекта.
 Объект создаётся с признаком временного, для его появления в репозитории
 необходимо будет его сохранить.


Если для класса объектов у операции создания назначена веб-форма, то
 в результате операции также будет доступен ключ этой веб-формы. Дальнейшая
 работа с полученным объектом осуществляется с помощью операций [GetCustomOb](GetCustomOb.htm),
 [SetCustomOb](SetCustomOb.htm) или на веб-форме. Для открытия
 веб-формы используйте операцию [OpenWebForm](../DevEnv/OpenWebForm.htm),
 информация об объекте передаётся в поле cstmArgs.
 Для того, чтобы объект появился в репозитории, его необходимо сохранить.
 Сохранение может быть осуществлено в коде веб-формы или с помощью операции
 [SaveObject](SaveObject.htm)/[SaveObjectAs](SaveObjectAs.htm).


## Пример


Ниже приведён пример создания объекта пользовательского класса. В запросе
 передаётся моникёр родительской папки и идентификатор класса создаваемого
 объекта. В ответе возвращается моникёр и описание созданного временного
 объекта.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CreateCustomOb xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!10099</id>  </tParent>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <classId>2168577</classId>  </tArg>
  </CreateCustomOb>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CreateCustomObResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<createResult xmlns="****">
[![](../../minus.gif)](../../#)<id>
  <id>KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL</id>  </id>
[![](../../minus.gif)](../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ10106</i>  <n>Пользовательский объект</n>  <k>10106</k>  <c>2168577</c>  <p>10099</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </object>
  </createResult>
  </CreateCustomObResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateCustomOb" :
  {
   "tParent" :
    {
     "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!10099"
    },
   "tArg" :
    {
     "classId" : "2168577"
    }
  }
}

### JSON-ответ:


{
 "CreateCustomObResult" :
  {
   "createResult" :
    {
     "id" :
      {
       "id" : "KIJGJLGLBNIEGOAEKKDNNHHCKMKIANEEPIGPOKBNCCCNDLDC!M!S!OGJDCJCHLBNIEGOAEEJEBKIOHBNBIFPPEIIEEIAFBMGNGGONL"
      },
     "object" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "1",
       "@hf" : "0",
       "i" : "OBJ10106",
       "n" : "Пользовательский объект",
       "k" : "10106",
       "c" : "2168577",
       "p" : "10099",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      }
    }
  }
}


public static CreateCustomObResult CreateCustomOb(string parentMon, uint classId)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tNew = new CreateCustomOb()
    {
        tArg = new CreateCustomObArg()
        {
            classId = classId
        },
        tParent = new OdId() { id = parentMon }
    };
    // Создание объекта пользовательского класса
    var tResult = somClient.CreateCustomOb(tNew);
    return tResult;
}


См. также:


[Работа
 с объектами пользовательских классов](Custom_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
