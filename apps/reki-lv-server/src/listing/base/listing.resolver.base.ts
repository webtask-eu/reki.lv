/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Listing } from "./Listing";
import { ListingCountArgs } from "./ListingCountArgs";
import { ListingFindManyArgs } from "./ListingFindManyArgs";
import { ListingFindUniqueArgs } from "./ListingFindUniqueArgs";
import { CreateListingArgs } from "./CreateListingArgs";
import { UpdateListingArgs } from "./UpdateListingArgs";
import { DeleteListingArgs } from "./DeleteListingArgs";
import { CommentFindManyArgs } from "../../comment/base/CommentFindManyArgs";
import { Comment } from "../../comment/base/Comment";
import { Category } from "../../category/base/Category";
import { User } from "../../user/base/User";
import { ListingService } from "../listing.service";
@graphql.Resolver(() => Listing)
export class ListingResolverBase {
  constructor(protected readonly service: ListingService) {}

  async _listingsMeta(
    @graphql.Args() args: ListingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Listing])
  async listings(
    @graphql.Args() args: ListingFindManyArgs
  ): Promise<Listing[]> {
    return this.service.listings(args);
  }

  @graphql.Query(() => Listing, { nullable: true })
  async listing(
    @graphql.Args() args: ListingFindUniqueArgs
  ): Promise<Listing | null> {
    const result = await this.service.listing(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Listing)
  async createListing(
    @graphql.Args() args: CreateListingArgs
  ): Promise<Listing> {
    return await this.service.createListing({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Listing)
  async updateListing(
    @graphql.Args() args: UpdateListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.updateListing({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Listing)
  async deleteListing(
    @graphql.Args() args: DeleteListingArgs
  ): Promise<Listing | null> {
    try {
      return await this.service.deleteListing(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Comment], { name: "comments" })
  async findComments(
    @graphql.Parent() parent: Listing,
    @graphql.Args() args: CommentFindManyArgs
  ): Promise<Comment[]> {
    const results = await this.service.findComments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: Listing
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Listing): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
