# Открытие контейнера моделирования

Открытие контейнера моделирования
-


**


# Открытие контейнера моделирования


Приведено использование операции [OpenMs](../OpenMs.htm)
 для открытия контейнера моделирования. В запросе передается моникёр контейнера.
 В ответе приходит моникёр открытого экземпляра контейнера моделирования.
 Какие-либо дополнительные данные не извлекаются.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<args>
  <onlyProblem>false</onlyProblem>  </args>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <items>Get</items>  </metaGet>
  </tArg>
  </OpenMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CHKGAJOLHGPMOFOAEAOFBOAAENDLELDBEHIBGFCIGDKEAEIKH</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="**ключ 306480**" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>306480</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<items>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>306485</k>  <id>SCEN$TREE</id>  <n>Дерево сценариев</n>  <vis>1</vis>  <type>Folder</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306493</k>  <id>OBJ306493</id>  <n>Переменные</n>  <vis>1</vis>  <type>Folder</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306486</k>  <id>OBJ306486</id>  <n>Переменная A</n>  <vis>1</vis>  <type>Variable</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306490</k>  <id>OBJ306490</id>  <n>Переменная B</n>  <vis>1</vis>  <type>Variable</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306494</k>  <id>OBJ306494</id>  <n>Модель (Детерминированное уравнение)</n>  <vis>1</vis>  <type>Model</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306495</k>  <id>OBJ306495</id>  <n>Метамодель</n>  <vis>1</vis>  <type>MetaModel</type>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>306496</k>  <id>OBJ306496</id>  <n>Задача моделирования</n>  <vis>1</vis>  <type>Problem</type>  </it>
  </its>
  </items>
  </meta>
  <readOnly xmlns="****">0</readOnly>  </OpenMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMs" :
  {
   "tOb" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480"
    },
   "tArg" :
    {
     "args" :
      {
       "onlyProblem" : "false"
      },
     "metaGet" :
      {
       "obInst" : "true",
       "items" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenMsResult" :
  {
   "id" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CHKGAJOLHGPMOFOAEAOFBOAAENDLELDBEHIBGFCIGDKEAEIKH"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "ключ 306480",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "5",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "306480",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "items" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "306485",
             "id" : "SCEN$TREE",
             "n" : "Дерево сценариев",
             "vis" : "1",
             "type" : "Folder"
            },
            {
             "k" : "306493",
             "id" : "OBJ306493",
             "n" : "Переменные",
             "vis" : "1",
             "type" : "Folder"
            },
            {
             "k" : "306486",
             "id" : "OBJ306486",
             "n" : "Переменная A",
             "vis" : "1",
             "type" : "Variable"
            },
            {
             "k" : "306490",
             "id" : "OBJ306490",
             "n" : "Переменная B",
             "vis" : "1",
             "type" : "Variable"
            },
            {
             "k" : "306494",
             "id" : "OBJ306494",
             "n" : "Модель (Детерминированное уравнение)",
             "vis" : "1",
             "type" : "Model"
            },
            {
             "k" : "306495",
             "id" : "OBJ306495",
             "n" : "Метамодель",
             "vis" : "1",
             "type" : "MetaModel"
            },
            {
             "k" : "306496",
             "id" : "OBJ306496",
             "n" : "Задача моделирования",
             "vis" : "1",
             "type" : "Problem"
            }
          ]
        }
      }
    },
   "readOnly" : "0"
  }
}


public static OpenMsResult OpenMs(MbId mb, string msId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Задаём параметры выполнения операции
    var tMsOp = new OpenMs()
    {
        tArg = new OpenMsArg()
        {
            args = new MsOpenArgs()
            {
                onlyProblem = false
            },
            metaGet = new MsMdPattern()
            {
                items = ListOperation.Get
            }
        },
        // Формирование моникера объекта
        tOb = new OdId() { id = mb.id + '!' + FindObjectById(mb, msId).k }
    };
    // Открытие контейнера моделирования
    var result = somClient.OpenMs(tMsOp);
    return result;
}


См. также:


[OpenMs:
 Операция](../OpenMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
