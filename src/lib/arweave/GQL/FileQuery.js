
export const FileQuery = (address) => {
    const queryObject = { query: `{
      transactions(first: 100,
        tags: [
          {
            name: "Apex-Cloud-User",
            values: ["${address}"]
          }
        ]
      ) {
        edges {
          node {
            id
            owner {
              address
            }
            data {
              size
            }
            block {
              height
              timestamp
            }
            tags {
              name,
              value
            }
          }
        }
      }
    }`}
    return queryObject;
   }

export default FileQuery